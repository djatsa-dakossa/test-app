import React, { useState } from 'react';

// @ts-ignore
import { View, Text, TextInput, TouchableHighlight, ScrollView } from "react-native";
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../types/types';
import { styles } from './components/styles/styles';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import TopBar from '../../components/topBar/Topbar';



export default function NoteView ({navigation}) {

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
            <TopBar navigation={navigation} />
                <View style={styles.alwaysred}>
                    <View style={styles.imageBg}>
                        <View style={styles.filterContainer}>
                            <Text style={styles.welcome} >You are reading :..</Text>
                        </View>
                    </View>
                    <View style={styles.noteContainer} > 
                        <Text>
                            klklk
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}