import React, { useEffect, useState } from 'react';

// @ts-ignore
import { View, Text, TextInput, TouchableHighlight, ScrollView, ActivityIndicator, Image } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../types/types';
import { styles } from './components/styles/styles';
import NoteBookCard from './components/notebookCard/NoteBookCard';
import AddNoteBook from './components/addNoteBook/AddNoteBook';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import TopBar from '../../components/topBar/Topbar';
import { loadNoteBooksEffect } from '../../store/effects/NoteBookEffects';
import Snackbar from 'react-native-snackbar';

const image = require('../../components/assets/cuate.png')



export default function Home ({navigation}) {

    // let user = RNSecureStorage.get('user').then(res => res)
    let {user } = useSelector((state: ApplicationState) => state.account);
    const {
        loading: {
        load_notebook_loading,
        load_notebook_failed_message,
        load_notebook_failed,
        load_notebook_success
    },
    notebooks
    } = useSelector((state: ApplicationState) => state.notebooks)
    console.log("user ===>", user)

    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        setOpen(false)
    }

    useEffect(() => {
        dispatch(
            loadNoteBooksEffect(search)
        )
    }, [search])

    useEffect(() => {
        if(load_notebook_failed){
            Snackbar.show({
                text: load_notebook_failed_message,
                backgroundColor: 'red',
                duration: Snackbar.LENGTH_SHORT,
            })
        }
    }, [load_notebook_failed])

    return(
        <View style={styles.mainview}>
            <ScrollView style={{backgroundColor: "#E5E5E5"}} >
                <View>
                    <TopBar navigation={navigation}/>
                    <View style={styles.alwaysred}>
                        <View style={styles.imageBg}>
                            <View style={styles.filterContainer}>
                                <Text>Hello {user?.fullName} </Text>
                                <Text style={styles.welcome} >Welcome back </Text>
                                <View style={{...styles.searchBlock}}>
                                    <TextInput
                                        placeholder="Search ..."
                                        style={styles.inputText}
                                        value={search}
                                        onChangeText={setSearch}
                                    />
                                    <TouchableHighlight style={styles.searchButton} >
                                        <Icon name="search" size={20} color="#D23078" ></Icon>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                        <View style={styles.notebookCardParent}> 
                            {
                                load_notebook_success && notebooks.map(notebook => {

                                    return(

                                        <NoteBookCard key={notebook._id} notebook={notebook} navigation={navigation} />
                                    )
                                })
                            }
                            {
                                load_notebook_success && search.length > 0 && notebooks.length === 0 && <View style={{flex: 1, marginTop:20, padding: 16}}>
                                    <Image style={{alignSelf:'stretch', width: "100%"}} source={image} />
                                    <Text>Any notebook found</Text>
                                </View>
                            }
                            {
                                load_notebook_success && search.length === 0 && notebooks.length === 0 && <View style={{flex: 1, marginTop:20, padding: 16}}>
                                    <Image style={{alignSelf:'stretch', width: "100%"}} source={image} />
                                    <Text>You do not have any notebook</Text>
                                </View>
                            }

                            {
                                load_notebook_loading && <View style={{flex: 1, justifyContent: 'center'}} >
                                    <ActivityIndicator/>
                                </View>
                            }


                        </View>
                    </View>
                </View>
            </ScrollView>
            <AddNoteBook open={open} handleClose={handleCloseModal} />
        </View>
    )
}