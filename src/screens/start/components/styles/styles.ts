'use strict';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    alwaysred: {
        backgroundColor: '#D23078',
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        height: 70,
        width: 70,
    },
    logo1: {
        height: 50,
        width: 150,
    },
    buttonContained: {
        height: 40,
        borderRadius: 20,
        backgroundColor: "#fff",
        overflow: 'hidden',
        alignItems: "center",
        marginTop: 16,
        marginBottom: 16
    },
    buttonOutlined: {
        height: 40,
        marginTop: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "rgba(255,255,255, 0.25)",
        alignItems: 'center'
    },
    buttonText: {
        color: "#F4327F",
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    buttonText1: {
        color: "#fff",
        marginTop: 'auto',
        marginBottom: 'auto',
    }
});