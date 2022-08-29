import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function ConvertItem({item}){
    return(
        <TouchableOpacity style={styles.item}>
            <Text style={styles.title}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 16, 
        marginTop: 16,
        marginLeft: 8,
        marginRight: 8,
        borderColor: '#FFA500',
        borderWidth: 1, 
        borderRadius: 10,
    },
    title:{
        fontWeight: '300',
        fontSize: 20,
        color: "#FFA500"
    }
})