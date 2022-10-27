import React from 'react';
import { View, StyleSheet } from 'react-native';
import ConverterScreen from './ConverterScreen';

export default function Weight () {

    const fromWeight = {
        'Грамм': (value) => { return value },
        'Килограмм': (value) => { return value * Math.pow(10, 3) },
        'Фунт': (value) => { return value * 453.6 },
    };
    const toWeight = {
        'Грамм': (value) => { return value },
        'Килограмм': (value) => { return value * Math.pow(10, -3) },
        'Фунт': (value) => { return parseFloat(value) / 453.6 },
    };

    function calculateAmount(amount, metric1, metric2) {
        return fromWeight[metric1](toWeight[metric2](amount))
    };

    return (
        <View style={styles.container}>
            <ConverterScreen
                data={fromWeight} default='Грамм'
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