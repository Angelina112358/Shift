import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import { ModalPicker } from './ModalPicker';

export default function MetricInput(props) {

    const [chooseData, setChooseData] = useState(props.metric);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const changeModalVisibility = (bool) => {
        setIsModalVisible(bool)
    }

    const setData = (option) => {
        setChooseData(option);
    }

    const handleSelectionChange = ({ selection }) => {
        props.onCursorPositionChange(selection.end)
    }
    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => props.onPress(props.id)}>
            <TextInput style={styles.text}
                maxLength={15}
                keyboardType='numeric'
                placeholder='1'
                placeholderTextColor="#FFA500"
                onChangeText={ev => props.onAmountChange(ev)}
                selection={{start: props.cursorPosition, end: props.cursorPosition}}
                value={props.amount}
                onSelectionChange={handleSelectionChange}
            >
                {props.amount}
                {/* {props.onAmountChange(props.amount)} */}
            </TextInput>
            <Text style={styles.text} onPress={() => changeModalVisibility(true)}>
                {chooseData}
                {props.onMetricChange(chooseData)}
            </Text>

            <Modal
                transparent={true}
                animationType='fade'
                visible={isModalVisible}
                nRequestClose={() => changeModalVisibility(false)}>
                <ModalPicker
                    changeModalVisibility={changeModalVisibility}
                    setData={setData}
                    metrics={props.metrics} />
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