import React, { useEffect } from 'react';
import { useState } from 'react';
// @ts-ignore
import { View, StyleSheet, Text, Image, TextInput, Dimensions, Button, TouchableHighlight, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Snackbar from 'react-native-snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { loginEffect } from '../../store/effects/AccountEffects';
import { ApplicationState } from '../../types/types';
import {styles} from './components/styles/styles'
import Input from 'react-native-input-style';


const bgImage = require("../../components/assets/bg2.png")

export default function LoginForm({navigation}) {
    const {loading: {
        login_loading,
        login_failed,
        login_failed_message,
    }} = useSelector((state: ApplicationState) => state.account)

    const dispatch = useDispatch()

    const [email, changeEmail] = useState("")
    const [password, changePassword] = useState("")
    
    const handleChangeView = () => {
        console.log(navigation)
        navigation.navigate('Register', { name: 'Registration view' })
    }

    const redirect = () => {
        navigation.navigate('Home', { name: 'Registration view' })
    }

    const handleSubmit = () => {
        const info = {
            email: email,
            password: password
        }
        dispatch(
            loginEffect(info, redirect)
        )
    }

    useEffect(() => {
        if(login_failed){
            Snackbar.show({
                text: login_failed_message,
                backgroundColor: 'red',
                duration: Snackbar.LENGTH_SHORT,
            })
        }
    }, [login_failed])

    return(
        <View style={styles.alwaysred}>
            <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
            <LinearGradient colors={[ "#fe6161cc", "#FF7955", "#d2307833" ]} style={styles.bg}>
                <Text style={{color: "#fff", marginTop: 50}} >Sign in</Text>                
                <View style={styles.formContainer}>

                    <Text style={styles.pageTitle}>Sign in</Text>
                    <Input
                        id='email'
                        labelStyle={{display: 'none'}}
                        required
                        placeholder="Email"
                        style={styles.inputText}
                        contain={email}
                        label=""
                        email={true}
                        borderColor="#F4327F"
                        onInputChange={changeEmail}
                    />
                    <Input
                        id='password'
                        labelStyle={{display: 'none'}}
                        required
                        placeholder="Password"
                        style={styles.inputText}
                        contain={password}
                        borderColor="#F4327F"
                        onInputChange={changePassword}
                        secureTextEntry={true}
                    />
                    <View>

                        <TouchableHighlight
                            style ={styles.button}
                            onPress={handleSubmit}
                            
                        >
                            <LinearGradient colors={[ "#d23078", "#fe6161", "#FF7955" ]} style={styles.bg}>
                                <Text style={styles.buttonText1} >Login</Text>
                            </LinearGradient>
                        </TouchableHighlight>
                        <View style={{ position: 'absolute', top:"50%",right: 0, left: 0 }}>
                            <ActivityIndicator animating={login_loading} color="red" />
                        </View> 
                    </View>
                </View>
                <View style={{alignSelf: 'stretch', padding: 16, }}>

                    <View style={styles.signupBlock}>
                        <Text style={{color: 'white'}}><Text>Not a user ?</Text>
                            <Text 
                                onPress={handleChangeView}
                            style={{color: '#fff044', borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255, 0.25)"}}> Sign up</Text>
                        </Text>
                    </View>
                </View>
        </LinearGradient>
            </ImageBackground>
        </View>
    )
}

