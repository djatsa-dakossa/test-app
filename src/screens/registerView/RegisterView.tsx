import React, { useEffect, useState } from 'react';
// @ts-ignore
import { View, StyleSheet, Text, Dimensions, Button, TouchableHighlight, SafeAreaView, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Snackbar from 'react-native-snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { registerEffect } from '../../store/effects/AccountEffects';
import { ApplicationState } from '../../types/types';
import {styles} from '../loginView/components/styles/styles';
import Input from 'react-native-input-style';


const bgImage = require("../../components/assets/bg2.png")

export default function RegisterForm({navigation}) {
    let ScreenHeight = Dimensions.get("window").height;

    const {loading: { 
        signup_loading, 
        signup_failed, 
        signup_failed_message, 
        signup_success_message, 
        signup_success }} = useSelector((state: ApplicationState) => state.account)
    
    const dispatch = useDispatch()
    const [firstName, changeFirstName] = useState("")
    const [lastName, changeLastName] = useState("")
    const [email, changeEmail] = useState("")
    const [password, changePassword] = useState("")

    const handleSubmit = () => {
        const info = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
        }
        console.log(info)
        dispatch(registerEffect(info))
    }

    const handleChangeView = () => {
        console.log(navigation)
        navigation.navigate('Register', { name: 'Registration view' })
    }

    useEffect(() => {
        if(signup_success){
            Snackbar.show({
                text: signup_success_message,
                backgroundColor: 'green',
                duration: Snackbar.LENGTH_SHORT,
            })
        }
        if(signup_failed){
            Snackbar.show({
                text: signup_failed_message || "Oops! an error occured",
                backgroundColor: 'red',
                duration: Snackbar.LENGTH_SHORT,
            })
        }

    }, [signup_loading, signup_success, signup_failed])
    
    return(
            <ScrollView>
        <View style={{backgroundColor: '#000', minHeight: ScreenHeight}}>
            <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
                <LinearGradient colors={[ "#fe6161cc", "#FF7955", "#d2307833" ]} style={styles.bg}>
                    <View style={styles.formContainer}>

                        <Text style={styles.pageTitle}>Join us</Text>
                        <Input
                            placeholder="First Name"
                            value={firstName}
                            borderColor="#F4327F"
                            labelStyle={{display: 'none'}}
                            onInputChange={changeFirstName}
                            style={styles.inputText}
                        />
                        <Input
                            placeholder="Last Name"
                            value={lastName}
                            borderColor="#F4327F"
                            labelStyle={{display: 'none'}}
                            onInputChange={changeLastName}
                            style={styles.inputText}
                        />
                        <Input
                            placeholder="Email"
                            value={email}
                            onInputChange={changeEmail}
                            style={styles.inputText}
                            borderColor="#F4327F"
                            labelStyle={{display: 'none'}}
                        />
                        <Input
                            placeholder="Password"
                            style={styles.inputText}
                            value={password}
                            borderColor="#F4327F"
                            labelStyle={{display: 'none'}}
                            onInputChange={changePassword}
                            secureTextEntry={true}
                        />
                        <View>

                            <TouchableHighlight
                                style ={styles.button}
                                onPress={handleSubmit} disabled={signup_loading}
                            >
                                <LinearGradient colors={[ "#d23078", "#fe6161", "#FF7955" ]} style={styles.bg}>
                                    <Text style={styles.buttonText1} >Sign up</Text>
                                </LinearGradient>
                                {/* <ActivityIndicator/> */}
                            </TouchableHighlight>
                            <View style={{ position: 'absolute', top:"50%",right: 0, left: 0 }}>
                                <ActivityIndicator animating={signup_loading} color="red" />
                            </View> 
                        </View>
                    </View>
                    <View style={{alignSelf: 'stretch', padding: 16, paddingBottom: 100}}>

                    <View style={styles.signupBlock}>
                        <Text style={{color: 'white'}}><Text>Already have an account ?</Text>
                            <Text 
                                onPress={handleChangeView}
                            style={{color: '#fff044', borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255, 0.25)"}}> Sign in</Text>
                        </Text>
                    </View>
                </View>
                </LinearGradient>
            </ImageBackground>
        </View>
            </ScrollView>
    )
}
