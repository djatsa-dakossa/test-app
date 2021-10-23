import React, { useEffect, useState } from 'react';
// @ts-ignore
import { View, StyleSheet, Text, Image, TextInput, Dimensions, Button, TouchableHighlight, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import Snackbar from 'react-native-snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { registerEffect } from '../../store/effects/AccountEffects';
import { ApplicationState } from '../../types/types';


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
        <SafeAreaView>
            <ScrollView>
                <View style={{backgroundColor: '#000', height: ScreenHeight, overflow: 'hidden', position: 'relative'}}>

                    <View style={styles.decoration}>

                    </View>
                    
                    <View style={styles.formContainer}>

                        <Text style={styles.pageTitle}>Enter your informations to create your account</Text>
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
                               
                            >
                                <Button  onPress={handleSubmit} disabled={signup_loading} color='#ef9b0f' title='Createe account' />
                                {/* <ActivityIndicator/> */}
                            </TouchableHighlight>
                            <View style={{ position: 'absolute', top:"50%",right: 0, left: 0 }}>
                                <ActivityIndicator animating={signup_loading} color="red" />
                            </View> 
                        </View>
                        <Text style={{color: 'white', marginTop: 16, textAlign: 'center'}}>Already have an account?</Text>
                        <Text onPress={() => navigation.navigate('Login', { name: 'Login view' })} style={{color: '#ef9b0f', marginBottom: 3, textAlign: 'center', }}>Log in</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    topBar: {
        backgroundColor: "#ef9b0f",
        alignSelf: 'stretch',
        height: 52,
        flexDirection: 'row', // row
        alignItems: 'center',
        justifyContent: 'space-between', // center, space-around
        paddingLeft: 10,
        paddingRight: 10,
        color: "#000",
        overflow: 'hidden'
    },
    titleText: {
        color: "#fff"
    },
    inputText: {
        width: 'auto',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingLeft: 16,
        paddingRight: 16,
    },
    formContainer: {
        textAlign: 'center',
        padding: 16,
        height: 'auto',
        margin: 'auto',
        backgroundColor: 'transparent',
        zIndex: 5
    },
    button: {
        borderRadius: 8,
        height: 'auto',
        marginTop :20,
        overflow: 'hidden'
    },
    pageTitle: {
        fontSize: 20,
        color: "white",
        marginBottom: 16,
        textAlign: 'center'
    },
    decoration: {
        width: 400,
        height: 400,
        backgroundColor: "#ef9b0f",
        borderRadius: 200,
        position: 'absolute',
        top: -190,
        left: '-50%',
        color: '#000',
        transform: [{translateX: 80}]
    }
})