import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { MenuItem } from 'react-native-material-menu';
import Snackbar from 'react-native-snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNoteBookEffect } from '../../store/effects/NoteBookEffects';
import { ApplicationState } from '../../types/types';
import {styles} from './styles/styles'


interface Props {
    action: Function,
    loading: boolean,
    text: string
}

export default function (props: Props) {


    const [open, setOpen] = useState(false)


    const {action, loading, text} = props
    
    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }


    const handleSubmit = () => {
        action(handleClose)
    }

    useEffect(() => {

        if(loading) {
            Snackbar.show({
                text: "please wait ...",
                backgroundColor: 'green',
                duration: Snackbar.LENGTH_SHORT,
            })
        }

    }, [loading])

    return(
        <View>

            <MenuItem onPress={handleOpen} > 
                <Text style={{color: 'red'}}>
                    Delete
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

                    <View>
                        <Text> {text} </Text>
                    </View>
                    <View style={styles.modalFooter}>
                        <TouchableOpacity 
                            onPress={handleClose}
                            style={styles.buttonCancel}
                            disabled={loading}
                            >
                            <Text style={styles.buttonCancelText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={handleSubmit}
                            style={styles.buttonSave}
                            disabled={loading}
                        >
                            <Text style={styles.buttonSaveText} >Delete</Text>
                            {loading && <ActivityIndicator style={{left: '30%', top: '30%', position:'absolute'}} color="#fff" />}
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}