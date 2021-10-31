import React from 'react'
import { View, Text, TouchableHighlight } from "react-native";
import { Icon } from 'react-native-elements';
import CustomMenu from '../menu/Menu';
import {styles} from '../styles/styles'
import SkeletonContent from 'react-native-skeleton-content';


export default function () {


    return(
        <View style={styles.notebookCard}>
            <SkeletonContent
                containerStyle={{ flex: 1, width: 300 }}
                isLoading={true}
                layout={[
                    { key: 'someId', width: 220, height: 20, marginBottom: 6 },
                    { key: 'someOtherId', width: 180, height: 20, marginBottom: 6 }
                ]}
                >
                <Text >Your content</Text>
                <Text >Other content</Text>
            </SkeletonContent>
            <Text style={styles.notebookCardTitle}>{"notebook.title"}</Text>
            <Text style={styles.notebookCardDescription}>{"notebook.description"}</Text>
            <View style={styles.separator}/>
            <View style={styles.notebookCardFooter}><Text>{"notebook.notes" || 0} Notes </Text> 
                <View style={{flexGrow: 1}} />
                <TouchableHighlight
                    underlayColor={'transparent'}
                   
                >
                    <View style={styles.buttonContent}>

                        <Text style={styles.showText} >Read </Text>
                        <Icon tvParallaxProperties="" style={styles.icon} size={20} color="#D23078" name="chevron-right"/>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}