import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import ConverterScreen from './ConverterScreen';

export default function Currency() {
    const [rates, setRates] = useState([]);

    useEffect(() => {
        axios.get('https://www.cbr-xml-daily.ru/latest.js')
            .then(responce => {
                setRates(responce.data.rates);
            })
    }, []);

    function calculateAmount(amount, metric1, metric2) {
        return amount * rates[metric2] / rates[metric1];
    };

    return (
        <View style={styles.container}>
            <ConverterScreen
                data={rates} default='USD'
                calculate ={calculateAmount}/>
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
    },
    text: {
        color: 'red'
    }
})