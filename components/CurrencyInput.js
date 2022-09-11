import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ModalPicker } from '../components/ModalPicker';

export default function CurrencyInput(props) {

    const [chooseData, setChooseData] = useState('USD');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const changeModalVisibility = (bool) => {
        setIsModalVisible(bool)
    }

    const setData = (option) => {
        setChooseData(option);
    }

    return (
        <TouchableOpacity style={styles.item}>
            <TextInput style={styles.text}
                placeholder='1'
                placeholderTextColor="#FFA500"
                onChangeText={ev=>props.onAmountChange(ev)}>
                    {props.amount}
                </TextInput>
                
            <Text style={styles.text} onPress={() => changeModalVisibility(true)}>
                {chooseData}
                {props.onCurrencyChange(chooseData)}
            </Text>

            <Modal
                transparent={true}
                animationType='fade'
                visible={isModalVisible}
                nRequestClose={() => changeModalVisibility(false)}>
                <ModalPicker
                    changeModalVisibility={changeModalVisibility}
                    setData={setData}
                    currencies={props.currencies} />
            </Modal>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        borderColor: '#FFA500',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        margin: 10,
        fontSize: 20,
        fontWeight: 'normal',
        color: '#FFA500',
        borderColor: '#FFA500',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    }

})