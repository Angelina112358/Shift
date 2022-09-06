import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'

const OPTIONS = ['USD', 'BYN', 'EUR', 'RUB'];

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ModalPicker = (props) => {
    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setData(option);
    }  
    const option = OPTIONS.map((item, index) => {
        return (
            <TouchableOpacity style={styles.option} key={index} onPress={() => onPressItem(item)}>
                <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
        )
    })
    return (
        <TouchableOpacity onPress={() => props.changeModalVisibility(false)}
            style={styles.container}>
            <View style={styles.modal}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

export { ModalPicker }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: 'black',
        borderColor: '#FFA500',
        borderWidth: 1, 
        margin: 5,
        width: width - 100,
        height: height / 2,
    },
    option: {
        alignItems: 'center'
    },
    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFA500'
    }

})