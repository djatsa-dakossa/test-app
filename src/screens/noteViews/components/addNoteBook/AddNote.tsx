import React, { useEffect, useState } from 'react';
import { Modal, TouchableHighlight, View, Text, TouchableOpacity, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import Input from 'react-native-input-style';
import LinearGradient from 'react-native-linear-gradient';
import Snackbar from 'react-native-snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { createNoteEffect } from '../../../../store/effects/NoteEffect';
import { ApplicationState } from '../../../../types/types';
import {styles} from '../styles/styles'



export default function (props: any) {


    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState("")

    const {notebook_id} = props

    const {
        loading_notes: {
            create_note_success,
            create_note_loading,
            create_note_failed_message,
            create_note_failed
        }
    } = useSelector((state: ApplicationState) => state.notebooks)

    const dispatch = useDispatch()
    
    const handleClose = () => {
        setTitle('');
        setContent('');
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const canSubmit = () => {
        return(
            title.length > 0 &&
            content.length > 0
        )
    }

    const handleSubmit = () =>{

        const info = {
            title: title,
            content: content
        }

        if(canSubmit()) {
            dispatch(
                // @ts-ignore
                createNoteEffect(notebook_id, info, handleClose)
            )
        }
    }

    useEffect(() => {

        if(create_note_success){
            Snackbar.show({
                text: "Note succesfully added",
                backgroundColor: 'green',
                duration: Snackbar.LENGTH_SHORT,
            })
        }
        if(create_note_failed){
            Snackbar.show({
                text: create_note_failed_message,
                backgroundColor: 'green',
                duration: Snackbar.LENGTH_SHORT,
            })
        }
    }, [create_note_success, create_note_failed])



    return(
        <View>

            <TouchableHighlight 
                onPress={handleOpen}
                style={styles.fabCreate} >
                <Text style={{color: "#fff", fontSize: 30}}>+</Text>
            </TouchableHighlight>

            <Modal
                animationType="slide"
                transparent={true}
                visible={open}
                onRequestClose={handleClose}
                style={styles.modal}
            >
                <ScrollView>
                    <View style={styles.containerModal}>

                        <View>
                            <TextInput
                                placeholder="Note title"
                                style={styles.textInput1}
                                value={title}
                                onChangeText={setTitle}
                            />
                            <TextInput
                                placeholder="Note content"
                                style={styles.textInput1}
                                value={content}
                                onChangeText={setContent}
                                multiline
                                numberOfLines={20}
                                
                            />
                        </View>
                        <View style={styles.modalFooter}>
                            <TouchableOpacity 
                                onPress={handleClose}
                                style={styles.buttonCancel}
                                >
                                <Text style={styles.buttonCancelText}>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={handleSubmit}
                                style={styles.buttonSave}
                            >
                                <LinearGradient colors={[ "#d23078", "#fe6161", "#FF7955" ]} style={{borderRadius: 20}} >
                                    <Text style={styles.buttonSaveText} >save</Text>
                                    {create_note_loading && <ActivityIndicator style={{left: '30%', top: '30%', position:'absolute'}} color="red" />}
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Modal>
        </View>
    )
}