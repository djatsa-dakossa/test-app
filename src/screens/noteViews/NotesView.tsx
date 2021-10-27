import React, { useState } from 'react';

// @ts-ignore
import { View, Text, TextInput, TouchableHighlight, ScrollView } from "react-native";
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../types/types';
import { styles } from './components/styles/styles';
import NoteCard from './components/noteCard/NoteCard';
import AddNote from './components/addNoteBook/AddNote';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import TopBar from '../../components/topBar/Topbar';



export default function NotesViews ({navigation}) {

    // let user = RNSecureStorage.get('user').then(res => res)
    let {user} = useSelector((state: ApplicationState) => state.account)
    console.log("user ===>", user)

    const [search, setSearch] = useState('')
    const [open, setOpen] = useState(false)

    const handleCloseModal = () => {
        setOpen(false)
    }

    return(
        <ScrollView>
            <View>
                <TopBar navigation={navigation}/>
                <View style={styles.alwaysred}>
                    <View style={styles.imageBg}>
                        <View style={styles.filterContainer}>
                            <Text style={styles.welcome} >Note Book .;;</Text>
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
                        <NoteCard navigation={navigation}/>
                        <NoteCard navigation={navigation}/>
                        <NoteCard navigation={navigation}/>
                        <NoteCard navigation={navigation}/>
                    </View>
                    <AddNote open={open} handleClose={handleCloseModal} />
                </View>
            </View>
        </ScrollView>
    )
}