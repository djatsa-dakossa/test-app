import React from 'react'
import { View, Text, TouchableHighlight } from "react-native";
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { loadANoteBookEffect } from '../../../../store/effects/NoteBookEffects';
import CustomMenu from '../menu/Menu';
import {styles} from '../styles/styles'

export default function ({navigation, notebook}) {

    const next = () => {
        navigation.navigate('NotesView')
    }

    const dispatch = useDispatch()

    const handleSelect = (id: string) => {

        dispatch(
            loadANoteBookEffect(id, next)
        )
    }

    return(
        <View style={styles.notebookCard}>
            
            <CustomMenu notebook={notebook}/>
            <Text style={styles.notebookCardTitle}>{notebook.title}</Text>
            <Text style={styles.notebookCardDescription}>{notebook.description}</Text>
            <View style={styles.separator}/>
            <View style={styles.notebookCardFooter}><Text>{notebook.notes || 0} Notes </Text> 
                <View style={{flexGrow: 1}} />
                <TouchableHighlight
                    underlayColor={'transparent'}
                    onPress={() => handleSelect(notebook._id)}
                   
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