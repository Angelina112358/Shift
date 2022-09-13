import React from 'react';
import { View, StyleSheet } from 'react-native';
import ConverterScreen from './ConverterScreen';

export default function Temperature() {

    const fromTemperature = {
        'Celsium': fromC,
        'Kalvin': fromK,
        'Faringate': fromF,
    };
    const toTemperature = {
        'Celsium': toC,
        'Kalvin': toK,
        'Faringate': toF,
    };

    function fromC(value) {
        return value;
    }
    function fromF(value) {
        return 5 / 9 * (value - 32);
    }
    function fromK(value) {
        return parseInt(value - 273);
    }

    function toC(value) {
        return value;
    }
    function toF(value) {
        return (value * 9) / 5 + 32;
    }
    function toK(value) {
        return value + 273;
    }

    function calculateAmount(amount, metric1, metric2) {
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