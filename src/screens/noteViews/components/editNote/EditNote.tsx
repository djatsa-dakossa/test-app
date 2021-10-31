import React, { useEffect, useState } from 'react';
import { Modal, TouchableHighlight, View, Text, TouchableOpacity, TextInput, ActivityIndicator, ScrollView } from 'react-native';
import Input from 'react-native-input-style';
import LinearGradient from 'react-native-linear-gradient';
import { MenuItem } from 'react-native-material-menu';
import Snackbar from 'react-native-snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { updateNoteBooksEffect } from '../../../../store/effects/NoteBookEffects';
import { updateNotesEffect } from '../../../../store/effects/NoteEffect';
import { ApplicationState } from '../../../../types/types';
import {styles} from '../styles/styles'



export default function (props: any) {


    const {note, notebook_id} = props
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState(note.title)
    const [content, setContent] = useState(note.content)


    let {loading_notes: {
        update_note_failed,
        update_note_failed_message,
        update_note_loading,
        update_note_success
    }} = useSelector((state: ApplicationState) => state.notebooks)
    
    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const dispatch = useDispatch()

    const handleSubmit = () => {

        if(title.length < 0 || content.length < 0) {
            Snackbar.show({
                text: "Please, let fill all fields and try again",
                backgroundColor: 'red',
                duration: Snackbar.LENGTH_SHORT,
            })
        } else {
            const info = {
                title: title,
                content: content
            }
            dispatch(
                updateNotesEffect(note._id, notebook_id,  info, handleClose)
            )
        }
    }

    useEffect(() => {

        if(update_note_loading) {
            Snackbar.show({
                text: "please wait ...",
                backgroundColor: 'green',
                duration: Snackbar.LENGTH_SHORT,
            })
        }
        if(update_note_success) {
            Snackbar.show({
                text: "Note succesfully updated",
                backgroundColor: 'green',
                duration: Snackbar.LENGTH_SHORT,
            })
        }
        if(update_note_failed) {
            Snackbar.show({
                text: update_note_failed_message,
                backgroundColor: 'red',
                duration: Snackbar.LENGTH_SHORT,
            })
        }

    }, [update_note_failed, update_note_success, update_note_loading])

    return(
        <View>

            <MenuItem onPress={handleOpen} > 
                <Text>
                    Edit
                </Text>
            </MenuItem>

            <Modal
                animationType="slide"
                transparent={true}
                visible={open}
                onRequestClose={handleClose}
                style={styles.modal}
            >
                <View style={styles.containerModal}>


                    <ScrollView>
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
                            numberOfLines={4}
                            
                        />
                    </ScrollView>
                    <View style={styles.modalFooter}>
                        <TouchableOpacity 
                            onPress={handleClose}
                            style={styles.buttonCancel}
                            disabled={update_note_loading}
                            >
                            <Text style={styles.buttonCancelText}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={handleSubmit}
                            style={styles.buttonSave}
                            disabled={update_note_loading}
                            >
                                <LinearGradient colors={[ "#d23078", "#fe6161", "#FF7955" ]} style={{borderRadius: 20}} >
                                    <Text style={styles.buttonSaveText} >save</Text>
                                    {update_note_loading && <ActivityIndicator style={{left: '30%', top: '30%', position:'absolute'}} color="red" />}
                                </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}