import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ModalPicker } from '../components/ModalPicker';

export default function CurrencyInput(props) {

    const [chooseData, setChooseData] = useState('Select item');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const changeModalVisibility = (bool) => {
        setIsModalVisible(bool)
    }

    const setData = (option) => {
        setChooseData(option)
    }
    return (
        <TouchableOpacity style={styles.item}>
            <TextInput
                placeholder='input number' value={props.amount}
            />

            <Text style={styles.text} onPress={() => changeModalVisibility(true)} value={props.currency}>
                {chooseData}
            </Text>

            <Modal
                transparent={true}
                animationType='fade'
                visible={isModalVisible}
                nRequestClose={() => changeModalVisibility(false)}
            >
                <ModalPicker
                    changeModalVisibility={changeModalVisibility}
                    setData={setData} />
            </Modal>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderColor: '#FFA500',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFA500',
        borderColor: '#FFA500',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    }


})