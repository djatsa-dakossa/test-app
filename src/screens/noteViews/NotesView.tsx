import React, { useEffect, useState } from 'react';

// @ts-ignore
import { View, Text, TextInput, TouchableHighlight, Image, ScrollView, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../types/types';
import { styles } from './components/styles/styles';
import NoteCard from './components/noteCard/NoteCard';
import AddNote from './components/addNoteBook/AddNote';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import TopBar from '../../components/topBar/Topbar';
import { loadNotesEffect } from '../../store/effects/NoteEffect';


const image = require('../../components/assets/rafiki.png')

export default function NotesViews ({navigation}) {

    // let user = RNSecureStorage.get('user').then(res => res)
    let {user} = useSelector((state: ApplicationState) => state.account)
    let {
        loading_notes: {
            load_note_loading,
            load_note_success,
            load_note_failed_message,
            create_note_failed,
            create_note_failed_message
        },
        notebook
    } = useSelector((state: ApplicationState) => state.notebooks)
    console.log("user ===>", user)

    const [search, setSearch] = useState('')
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()

    const handleCloseModal = () => {
        setOpen(false)
    }

    useEffect(() => {
        dispatch(
            loadNotesEffect(notebook.detail._id, search)
        )
    }, [search])

    useEffect(() => {
        console.log("load_note_success", notebook)
    }, [load_note_success])

    return(
        <View style={styles.mainview} >
            <ScrollView style={{backgroundColor: "#E5E5E5"}} >
                <View>
                    <TopBar navigation={navigation}/>
                    <View style={styles.alwaysred}>
                        <View style={styles.imageBg}>
                            <View style={styles.filterContainer}> 
                                <Text style={styles.welcome} >{notebook?.detail.title || ""}</Text>
                                <View style={styles.searchBlock}>
                                    <TextInput
                                        placeholder="Search ..."
                                        style={styles.inputText}
                                        value={search}
                                        onChangeText={setSearch}
                                    />
                                    <TouchableHighlight 
                                        underlayColor={'transparent'}
                                        onPress={() => navigation.navigate('NoteView')}
                                        style={styles.searchButton} >
                                        <Icon name="search" size={20} color="#D23078" ></Icon>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                        <View style={styles.notebookCardParent}> 
                            {
                                // @ts-ignore
                                load_note_success && notebook.all_notes.map(note => <NoteCard note={note} key={note._id} navigation={navigation} notebook_id={notebook.detail._id}/> )
                            }
                            {
                                load_note_success && search.length > 0 && notebook.all_notes.length === 0 && <View style={{flex: 1, marginTop:20, padding: 16}}>
                                    <Image style={{alignSelf:'stretch', width: "100%"}} source={image} />
                                    <Text>Any note found</Text>
                                </View>
                            }
                            {
                                load_note_success && search.length === 0 && notebook.all_notes.length === 0 && <View style={{flex: 1, marginTop:20, padding: 16}}>
                                    <Image style={{alignSelf:'stretch', width: "100%"}} source={image} />
                                    <Text>You do not have any note</Text>
                                </View>
                            }

                            {
                                load_note_loading && <View style={{flex: 1, justifyContent: 'center'}} >
                                    <ActivityIndicator/>
                                </View>
                            }

                        </View>
                    </View>
                </View>
            </ScrollView>
            <AddNote notebook_id={notebook.detail._id} handleClose={handleCloseModal} />
        </View>
    )
}