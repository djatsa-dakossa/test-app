import React, { useState } from 'react';
import { Modal, TouchableHighlight, View, Text, TouchableOpacity, TextInput } from 'react-native';
import Input from 'react-native-input-style';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../styles/styles'



export default function (props: any) {


    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState("")
    
    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }



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
                                >
                                <Text style={styles.buttonCancelText}>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={handleClose}
                                style={styles.buttonSave}
                                >
                                    <LinearGradient colors={[ "#d23078", "#fe6161", "#FF7955" ]} style={{borderRadius: 20}} >
                                        <Text style={styles.buttonSaveText} >save</Text>
                                    </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
        </View>
    )
}