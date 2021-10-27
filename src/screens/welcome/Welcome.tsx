import React from 'react';
import { View, Text, ImageBackground, TouchableHighlight } from 'react-native';
import {styles} from './components/styles/styles'
import { Icon } from 'react-native-elements'



export default function Welcome ({navigation}) {

    const redirect = () => {
        navigation.navigate('Start', { name: 'Registration view' })
    }



    return (
        <View style={styles.alwaysred}>
            <View style={styles.image} >
                <ImageBackground style={{height: "100%"}} source={{uri: "https://st.depositphotos.com/1875497/3781/i/950/depositphotos_37810929-stock-photo-books-on-white.jpg"}}>
                </ImageBackground>
            </View>
            <View>
                <Text style={styles.titleText}>Welcome to your note book app.</Text>
            </View>
            <View style={styles.separator}/>
            <View style={{paddingLeft: 20}}>

                <View style={styles.buttonParent}>

                    <TouchableHighlight
                        onPress={redirect}
                        style ={styles.button}
                    >
                        <View style={styles.buttonContent}>

                            <Text style={styles.buttonText1} >Get started </Text>
                            <Icon tvParallaxProperties="" style={styles.icon} size={20} color="#D23078" name="chevron-right"/>
                        </View>
                        {/* <ActivityIndicator/> */}
                    </TouchableHighlight>
                    <View style={{ position: 'absolute', top:"50%",right: 0, left: 0 }}>
                    </View> 
                </View>
            </View>
        </View>
    )
}