import React, { useEffect } from 'react';
import { useState } from 'react';
// @ts-ignore
import { View, Text, Image, TextInput, TouchableHighlight, ActivityIndicator, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Snackbar from 'react-native-snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { loginEffect } from '../../store/effects/AccountEffects';
import { ApplicationState } from '../../types/types';
import {styles} from './components/styles/styles'


const bgImage = require("../../components/assets/bg2.png")
const image = require("../../components/assets/logo.png")


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
                <Image width={40} height={40} style={styles.logo} source={image}/>
                <View style={styles.formContainer}>

                    <Text style={styles.pageTitle}>Sign in</Text>
                    <TextInput
                        placeholder="Email"
                        style={styles.inputText}
                        value={email}
                        onChangeText={changeEmail}
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.inputText}
                        value={password}
                        onChangeText={changePassword}
                        secureTextEntry={true}
                    />
                    <View>

                        <TouchableHighlight
                            style ={styles.button}
                            onPress={handleSubmit}
                            disabled={false}
                        >
                            <LinearGradient colors={[ "#d23078", "#fe6161", "#d23078" ]} style={styles.bg}>
                                <Text style={styles.buttonText1} >Login</Text>
                            </LinearGradient>
                        </TouchableHighlight>
                        <View style={{ position: 'absolute', top:"40%",right: 0, left: 0 }}>
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
            </ImageBackground>
        </View>
    )
}

