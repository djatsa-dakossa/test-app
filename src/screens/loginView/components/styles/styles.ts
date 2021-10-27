'use strict';
import { StyleSheet } from 'react-native';

export 
const styles = StyleSheet.create({
    alwaysred: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    topBar: {
        backgroundColor: "#ef9b0f",
        alignSelf: 'stretch',
        height: 52,
        flexDirection: 'row', // row
        alignItems: 'center',
        justifyContent: 'space-between', // center, space-around
        paddingLeft: 10,
        paddingRight: 10,
        color: "#000",
        overflow: 'hidden'
    },
    titleText: {
        color: "#444444"
    },
    inputText: {
        width: 'auto',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 10
    },
    formContainer: {
        textAlign: 'center',
        padding: 16,
        height: 'auto',
        margin: 'auto',
        backgroundColor: '#F2F2F2',
        zIndex: 5,
        marginTop: 50,
        alignSelf: 'stretch',
        borderRadius: 20
    },
    button: {
        height: 40,
        borderRadius: 20,
        backgroundColor: "#fff",
        overflow: 'hidden',
        alignItems: "center",
        marginTop: 16,
        marginBottom: 16,

    },
    pageTitle: {
        fontSize: 20,
        color: "#444444",
        marginBottom: 16,
        textAlign: 'center'
    },
    buttonText1: {
        color: "#fff",
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    bg:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        alignItems: "center"
    },
    signupBlock: {
        marginTop: 40,
        borderTopColor: "rgba(255,255,255, 0.25)",
        borderTopWidth: 1,
        padding: 12,
        alignItems: 'center',
    },
    logo: {
        height: 70,
        width: 70,
        marginTop: 50
    }
})