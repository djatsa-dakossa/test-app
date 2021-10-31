import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {getData} from '../utils/storage'
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/actions/AccountActions';

export default function Auth ({children}) {

    const dispatch = useDispatch()
    
    const fetchUser = async () => {
        const userData = await getData('user');
        const tokenData = await getData('token');

        console.log('userData', userData, tokenData)

        // login the user if his data exists
        
        if(userData && tokenData) {
            dispatch(
                // @ts-ignore
                loginSuccess(userData, tokenData, false)
            )
        }
    }
    fetchUser();



    return children
}
