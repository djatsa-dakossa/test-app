'use strict';
import { StyleSheet } from 'react-native';


export  const styles = StyleSheet.create({
    alwaysred: {
        backgroundColor: '#E5E5E5',
        flex: 1,
    },
    imageBg: {
        backgroundColor: "#D23078",
        minHeight: 100,
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
    noteContainer: {
        backgroundColor: "#E5E5E5",
        flex: 1,
        height: 'auto',
        padding: 20
    }
})