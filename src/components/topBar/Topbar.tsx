import React from 'react'
import { View, Text, TouchableHighlight } from "react-native";
import { Icon } from 'react-native-elements';
import { styles  } from "./components/styles/styles";




export default function TopBar ({navigation}) {

    return(
        <View style={styles.topbar} >
            
            <TouchableHighlight
                onPress={() => navigation.goBack()}
                underlayColor={'transparent'}
                style={styles.backButton}
                
            >
                <Icon tvParallaxProperties="" size={40} color="#D23078" name="chevron-left"/>

            </TouchableHighlight>
        </View>
    )
}