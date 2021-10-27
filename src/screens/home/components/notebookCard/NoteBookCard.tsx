import React from 'react'
import { View, Text, TouchableHighlight } from "react-native";
import { Icon } from 'react-native-elements';
import CustomMenu from '../menu/Menu';
import {styles} from '../styles/styles'

export default function ({navigation}) {


    return(
        <View style={styles.notebookCard}>
            
            <CustomMenu/>
            <Text style={styles.notebookCardTitle}>Front-end Dev</Text>
            <Text style={styles.notebookCardDescription}>Front-end Dev Descrip</Text>
            <View style={styles.separator}/>
            <View style={styles.notebookCardFooter}><Text>7 Notes </Text> 
                <View style={{flexGrow: 1}} />
                <TouchableHighlight
                    underlayColor={'transparent'}
                    onPress={() => navigation.navigate('NotesView')}
                   
                >
                    <View style={styles.buttonContent}>

                        <Text style={styles.showText} >Read </Text>
                        <Icon tvParallaxProperties="" style={styles.icon} size={20} color="#D23078" name="chevron-right"/>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}