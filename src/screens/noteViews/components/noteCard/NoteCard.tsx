import React from 'react'
import { View, Text, TouchableHighlight } from "react-native";
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { loadANoteBookEffect } from '../../../../store/effects/NoteBookEffects';
import { loadANoteEffect } from '../../../../store/effects/NoteEffect';
import CustomMenu from '../menu/Menu';
import {styles} from '../styles/styles'

export default function ({navigation, note, notebook_id}) {

    const dispatch = useDispatch();

    const next = () => {
        navigation.navigate('NoteView')
    }

    const handleRead = (id: string) => {
        dispatch(
            loadANoteEffect(id,notebook_id, next )
        )
    }

    return(
        <View style={styles.notebookCard}>
            
            <CustomMenu note={note} notebook_id={notebook_id} />
            <Text style={styles.notebookCardTitle}>{note.title}</Text>
            <Text style={styles.notebookCardDescription}>{note.content.slice(0, 30)}</Text>
            <View style={styles.separator}/>
            <View style={styles.notebookCardFooter}><Text> Updated: {note.updated.slice(0, 10)} </Text> 
                <View style={{flexGrow: 1}} />
                <TouchableHighlight
                    underlayColor={'transparent'}
                   onPress={() => handleRead(note._id)}
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