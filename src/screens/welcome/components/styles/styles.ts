'use strict';
import { StyleSheet } from 'react-native';

export 
const styles = StyleSheet.create({
    alwaysred: {
        backgroundColor: '#D23078',
        flex: 1
    },
    image: {
        backgroundColor: "#fff",
        height:"50%",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        overflow: 'hidden'
    },
    
    titleText: {
        color: "#fff",
        marginTop: 50,
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        paddingLeft: 20
    },
    buttonParent:{
        height: 50,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        paddingLeft: 10,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
    },
    button: {
        height: 50,
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        overflow: 'hidden',
        alignItems: "center",
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        color:"#D23078",
        position: 'relative'
    },
    pageTitle: {
        fontSize: 20,
        color: "#444444",
        marginBottom: 16,
        textAlign: 'center'
    },
    buttonText1: {
        color:"#D23078",
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 20,
        flexGrow: 1,
        textAlign: 'center'

    },
    bg:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        alignItems: "center"
    },
    separator: {
        marginTop: 40,
        borderTopColor: "rgba(255,255,255, 0.25)",
        borderTopWidth: 1,
        padding: 12,
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 16,
    },
    logo: {
        height: 70,
        width: 70,
    },
    icon: {
        color:"#D23078",
        margin: 15
    },
    buttonContent: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1
    }
})