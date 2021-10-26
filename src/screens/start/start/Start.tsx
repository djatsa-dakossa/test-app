import React from 'react';

// @ts-ignore
import { View, Text, ImageBackground, Image, TouchableHighlight, Button, TouchableOpacity } from "react-native";
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../../types/types';
import {styles} from '../components/styles/styles';

const image = require("../../../components/assets/bg1.png")
export default function Start ({navigation}) {

    // let user = RNSecureStorage.get('user').then(res => res)
    let {user} = useSelector((state: ApplicationState) => state.account)
    console.log("user ===>", user)
    return(
        <View style={styles.alwaysred}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Image style={styles.logo} source={require('../../../components/assets/logo.png')} />
                <Image style={styles.logo1} source={require('../../../components/assets/text.png')} />
                <View style={{alignSelf: 'stretch', padding: 16}}>

                    <TouchableOpacity
                        style ={styles.buttonContained}
                        onPress={() => navigation.navigate('Login')}
                        
                    >
                        <Text style={styles.buttonText} >Login</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 1, height: 1, backgroundColor: 'rgba(255,255,255, 0.25)'}} />
                            <View>
                                <Text style={{width: 50, textAlign: 'center'}}>OR</Text>
                            </View>
                        <View style={{flex: 1, height: 1, backgroundColor: 'rgba(255,255,255, 0.25)'}} />
                    </View>
                    <TouchableOpacity
                        style ={styles.buttonOutlined}
                        onPress={() => navigation.navigate('Register')}
                        
                    >
                    <Text style={styles.buttonText1} >Create an account</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}