import React, { useEffect, useState } from 'react';
import { Modal, TouchableHighlight, View, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import Input from 'react-native-input-style';
import LinearGradient from 'react-native-linear-gradient';
import Snackbar from 'react-native-snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { createNoteBookEffect } from '../../../../store/effects/NoteBookEffects';
import { ApplicationState } from '../../../../types/types';
import {styles} from '../styles/styles'



export default function (props: any) {


    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState("")

    let {loading: {
        create_notebook_loading,
        create_notebook_failed,
        create_notebook_success,
        create_notebook_failed_message
    }} = useSelector((state: ApplicationState) => state.notebooks)
    
    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const dispatch = useDispatch()

    const handleSubmit = () => {

        if(title.length < 0 || description.length < 0) {
            Snackbar.show({
                text: "Please, let fill all fields and try again",
                backgroundColor: 'red',
                duration: Snackbar.LENGTH_SHORT,
            })
        } else {
            const info = {
                title: title,
                description: description
            }
            dispatch(
                createNoteBookEffect(info, handleClose)
            )
        }
    }

    useEffect(() => {

        if(create_notebook_loading) {
            Snackbar.show({
                text: "please wait ...",
                backgroundColor: 'green',
                duration: Snackbar.LENGTH_SHORT,
            })
        }
        if(create_notebook_success) {
            Snackbar.show({
                text: "Notebook succesfully added",
                backgroundColor: 'green',
                duration: Snackbar.LENGTH_SHORT,
            })
        }
        if(create_notebook_failed) {
            Snackbar.show({
                text: create_notebook_failed_message,
                backgroundColor: 'red',
                duration: Snackbar.LENGTH_SHORT,
            })
        }

    }, [create_notebook_failed, create_notebook_success, create_notebook_loading])

    return(
        <View>

            <TouchableHighlight 
                underlayColor={'transparent'}
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
                <View style={styles.containerModal}>

                    <View>
                        <TextInput
                            placeholder="Notebook title"
                            style={styles.textInput1}
                            value={title}
                            onChangeText={setTitle}
                        />
                        <TextInput
                            placeholder="Notebook description"
                            style={styles.textInput1}
                            value={description}
                            onChangeText={setDescription}
                            multiline
                            numberOfLines={4}
                            
                        />
                    </View>
                    <View style={styles.modalFooter}>
                        <TouchableOpacity 
                            onPress={handleClose}
                            style={styles.buttonCancel}
                            disabled={create_notebook_loading}
                            >
                            <Text style={styles.buttonCancelText}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={handleSubmit}
                            style={styles.buttonSave}
                            disabled={create_notebook_loading}
                            >
                                <LinearGradient colors={[ "#d23078", "#fe6161", "#FF7955" ]} style={{borderRadius: 20}} >
                                    <Text style={styles.buttonSaveText} >save</Text>
                                    {create_notebook_loading && <ActivityIndicator style={{left: '30%', top: '30%', position:'absolute'}} color="red" />}
                                </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}