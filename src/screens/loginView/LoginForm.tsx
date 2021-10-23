import React, { useEffect } from 'react';
import { useState } from 'react';
// @ts-ignore
import { View, StyleSheet, Text, Image, TextInput, Dimensions, Button, TouchableHighlight, ScrollView, ActivityIndicator } from 'react-native';
import Snackbar from 'react-native-snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { loginEffect } from '../../store/effects/AccountEffects';
import { ApplicationState } from '../../types/types';


export default function LoginForm({navigation}) {
    let ScreenHeight = Dimensions.get("window").height;
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
        <ScrollView>
        <View style={{backgroundColor: '#000', height: ScreenHeight, overflow: 'hidden', position: 'relative'}}>

            <View style={styles.decoration}>

            </View>
            
            <View style={styles.formContainer}>

                <Text style={styles.pageTitle}>Login in to your acount</Text>
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
                        
                    >
                        <Button disabled={false} onPress={handleSubmit} color='#ef9b0f' title='Log in'  />
                    </TouchableHighlight>
                    <View style={{ position: 'absolute', top:"50%",right: 0, left: 0 }}>
                        <ActivityIndicator animating={login_loading} color="red" />
                    </View> 
                </View>
                <Text style={{color: 'white', marginTop: 16, textAlign: 'center'}}>Don't have an account?</Text>
                <Text 
                    onPress={handleChangeView}
                 style={{color: '#ef9b0f', marginBottom: 3, textAlign: 'center', }}>Create an account</Text>
            </View>
        </View>
        </ScrollView>
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
        marginTop: 150,
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