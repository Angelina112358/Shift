import React from "react";
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CurrencyInput from '../components/CurrencyInput';
import Numbers from '../components/Numbers';

export default function Currency() {

    const pressHandler = ({ navigation }) => {
        navigation.goBack()
    }

    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('EUR');

    return (
        <View style={styles.container}>
            <View style={styles.inputs}>
                <CurrencyInput amount={amount1} currency={currency1} />
                <CurrencyInput amount={amount2} currency={currency2} />
            </View>
            <View style={styles.numbers}>
                <Numbers />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    numbers: {
        marginTop: 40
    },
    inputs: {
        marginTop: 20
    }
})