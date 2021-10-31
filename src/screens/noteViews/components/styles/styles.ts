'use strict';
import { StyleSheet } from 'react-native';

export 
const styles = StyleSheet.create({
    alwaysred: {
        backgroundColor: '#E5E5E5',
        flex: 1,
        overflow: 'scroll'
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
    searchBlock: {
        borderRadius: 8,
        borderWidth: 1,
        overflow: 'hidden',
        borderColor: 'rgba(255,255,255, 0.25)',
        alignSelf: 'stretch',
        marginLeft: 20,
        marginRight: 20,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20
    },
    inputText: {
        width: 'auto',
        height: 40,
        borderColor: 'gray',
        backgroundColor: 'transparent',
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 16,
        borderBottomWidth: 0,
        flexGrow: 1,
        alignSelf: 'stretch',
        overflow: "hidden"
    },
    searchButton: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingLeft: 10,
        paddingRight: 10,
        alignContent: 'center',
        margin: 5,
        color: "#D23078",
        justifyContent: 'center'
    },
    notebookCardParent: {
        padding: 20,
        marginTop: -70,
        marginBottom: 40,
        backgroundColor: 'transparent',
    },
    notebookCard: {
        borderRadius: 20,
        backgroundColor: '#fff',
        shadowColor: "#ccc",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        marginTop: 16,
        position: 'relative'
    },
    notebookCardTitle: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.4)',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20
    },
    notebookCardDescription: {
        fontSize: 24,
        color: '#000',
        paddingLeft: 20,
        paddingRight: 20,
        
    },
    separator: {
        marginTop: 40,
        borderTopColor: 'rgba(192,192,192,0.3)',
        borderTopWidth: 1,
        paddingTop: 12,
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    notebookCardFooter: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.4)',
        padding: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    showText: {
        color: "#D23078",
        fontSize: 16,
    },
    fabCreate: {
        fontSize: 16,
        borderRadius: 25,
        backgroundColor:"#D23078",
        color:"#fff",
        position: 'absolute',
        bottom: 16,
        right: 16,
        height: 50,
        width: 50,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        margin: 0,
    },
    buttonContent: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1
    },
    containerModal: {
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
        margin: 20,
        borderRadius: 20,
        justifyContent: 'center',
        overflow: 'scroll',
        paddingBottom: 16,
        paddingTop: 16,
    },
    // modal: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     position: 'relative',
    //     overflow: 'scroll',
    //     // @ts-ignore
    //     display: 'block'
    // },
    modal: {
        position:'absolute',
        top:'10%',
        left:'10%',
        overflow:'scroll',
        height:'100%',
        // display:'block'
      },
    textInput1: {
        alignSelf: 'stretch',
        borderBottomWidth: 1,
        width: 200,
        borderBottomColor: 'rgba(0, 0, 0, 0.4)'
    },
    modalFooter: {
        display: 'flex', 
        flexDirection: 'row',
        marginTop: 40
    },
    buttonSave: {
    },
    buttonSaveText: {
        borderRadius: 20,
        padding: 16,
        overflow: "hidden",
        color: "#fff"

    },
    buttonCancel: {
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: "#E5E5E5",
        padding: 16
    },
    buttonCancelText: {},
    more: {
        position: 'absolute',
        right: 16,
        top: 10,
    },
    dropdownMenu: {
        right: 40,
        left: 100,
    },
    mainview: {
        backgroundColor: "#E5E5E5", 
        flex: 1
    }
})