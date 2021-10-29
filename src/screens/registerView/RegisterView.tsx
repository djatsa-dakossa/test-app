import React, { useEffect, useState } from 'react';
// @ts-ignore
import { View, Text, TouchableHighlight, ScrollView, ActivityIndicator, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Snackbar from 'react-native-snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { registerEffect } from '../../store/effects/AccountEffects';
import { ApplicationState } from '../../types/types';
import {styles} from '../loginView/components/styles/styles';
import TopBar from '../../components/topBar/Topbar';


const bgImage = require("../../components/assets/bg2.png")

export default function RegisterForm({navigation}) {

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
            fullName: firstName + " " + lastName,
            email: email,
            password: password,
        }
        console.log(info)
        dispatch(registerEffect(info))
    }

    const handleChangeView = () => {
        navigation.navigate('Login', { name: 'Registration view' })
    }

    const canBeSubmitted = () => {

        return (
            firstName.length > 0 &&
            lastName.length > 0 &&
            password.length > 0 &&
            email.length > 0 
        )
    }

    useEffect(() => {
        if(signup_success){
            Snackbar.show({
                text: signup_success_message,
                backgroundColor: 'green',
                duration: Snackbar.LENGTH_LONG,
            })
        }
        if(signup_failed){
            Snackbar.show({
                text: signup_failed_message || "Oops! an error occured",
                backgroundColor: 'red',
                duration: Snackbar.LENGTH_LONG,
            })
        }

    }, [signup_loading, signup_success, signup_failed])
    
    return(
        <ScrollView style={styles.alwaysred} >
            <View>
                <TopBar navigation={navigation} />
                <View style={styles.formContainer}>

                    <Text style={styles.pageTitle}>Create your account</Text>
                    <TextInput
                        placeholder="First Name"
                        value={firstName}
                        onChangeText={changeFirstName}
                        style={styles.inputText}
                    />
                    <TextInput
                        placeholder="Last Name"
                        value={lastName}
                        onChangeText={changeLastName}
                        style={styles.inputText}
                    />
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={changeEmail}
                        style={styles.inputText}
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
                            // disabled={signup_loading || !canBeSubmitted()}
                        >
                            <LinearGradient colors={[ "#d23078", "#fe6161", "#D23078" ]} style={styles.bg}>
                                <Text style={styles.buttonText1} >Sign up</Text>
                            </LinearGradient>
                            {/* <ActivityIndicator/> */}
                        </TouchableHighlight>
                        <View style={{ position: 'absolute', top:"40%",right: 0, left: 0 }}>
                            <ActivityIndicator animating={signup_loading} color="red" />
                        </View> 
                    </View>
                </View>
                <View style={{alignSelf: 'stretch', padding: 16, paddingBottom: 10}}>

                    <View style={styles.signupBlock}>
                        <Text style={{color: 'white'}}><Text>Already have an account ?</Text>
                            <Text 
                                onPress={handleChangeView}
                            style={{color: '#fff044'}}> Sign in</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
