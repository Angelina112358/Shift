import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ConverterScreen from './ConverterScreen';

export default function Temperature() {

    const fromTemperature = {
        'Celsium': (value)=>{return value},
        'Kalvin': (value)=>{return parseFloat(value) - 273},
        'Faringate': (value)=>{return 5 / 9 * (value - 32)},
    };
    const toTemperature = {
        'Celsium': (value)=>{return value},
        'Kalvin': (value)=>{return parseFloat(value) + 273},
        'Faringate': (value)=>{return (value * 9) / 5 + 32},
    };

    function calculateAmount(amount, metric1, metric2) {
        //return amount;
        return fromTemperature[metric1](toTemperature[metric2](amount))
    };

    return (
        <View style={styles.container}>
            <ConverterScreen
                data={fromTemperature} default='Celsium'
                calculate={calculateAmount} />
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