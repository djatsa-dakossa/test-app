'use strict';
import { StyleSheet } from 'react-native';

export  const styles = StyleSheet.create({
    topbar: {
        backgroundColor: '#D23078',
        height: 50, 
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 16
    },
    imageBg: {
        backgroundColor: "#D23078",
        minHeight: 200,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        overflow: 'hidden'
    },
    filterContainer: {
        alignItems: 'center',
        justifyContent:  'center',
        flex: 1
    }, 
    welcome: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButton: {
        backgroundColor: "#fff",
        borderRadius: 8,
        color:"#D23078"
    }
})