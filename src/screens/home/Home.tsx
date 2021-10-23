import React from 'react';

// @ts-ignore
import { View, Text } from "react-native";
import { useSelector } from 'react-redux';
import RNSecureStorage from 'rn-secure-storage';
import { ApplicationState } from '../../types/types';


export default function Home () {

    // let user = RNSecureStorage.get('user').then(res => res)
    let {user} = useSelector((state: ApplicationState) => state.account)
    console.log("user ===>", user)
    return(
        <View>
            <Text>Welcome {user?.first_name} </Text>
        </View>
    )
}