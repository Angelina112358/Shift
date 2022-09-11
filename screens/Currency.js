import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import CurrencyInput from '../components/CurrencyInput';
import Numbers from '../components/Numbers';
import axios from 'axios';

export default function Currency() {
    const [rates, setRates] = useState([]);

    useEffect(() => {
        axios.get('https://www.cbr-xml-daily.ru/latest.js')
            .then(responce => {
                setRates(responce.data.rates);
            })
    }, []);

    // useEffect(()=>{
    //     if (!!rates) {
    //         handleAmount1Change(1);
    //     }
    // }, [rates])

    function format(number) {
        return number.toFixed(4)
    }

    const [amount1, setAmount1] = useState('100');
    const [amount2, setAmount2] = useState('100');
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('USD');

    const [test, setTest] = useState('100');

    function handleAmount1Change(amount1) {
        setAmount1(amount1);
        setAmount2(format(amount1 * rates[currency2]/rates[currency1]));
    };
    function handleCurrency1Change(currency1){
        setCurrency1(currency1);
        setAmount2(format(amount1*rates[currency2]/rates[currency1]));
    };
    function handleAmount2Change(amount2) {
        setAmount2(amount2);
        setAmount1(format(amount2 * rates[currency1]/rates[currency2]));
    };
    function handleCurrency2Change(currency2){
        setCurrency2(currency2);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputs}>
                <CurrencyInput
                    currencies={Object.keys(rates)}
                    amount={amount1}
                    currency={currency1}
                    onAmountChange={handleAmount1Change}
                    onCurrencyChange={handleCurrency1Change}
                />
                <CurrencyInput
                    currencies={Object.keys(rates)}
                    amount={amount2}
                    currency={currency2}
                    onAmountChange={handleAmount2Change}
                    onCurrencyChange={handleCurrency2Change} 
                />
            </View>
            <Text style={styles.text}>{amount1}</Text>
            <TextInput style={styles.text}>{amount2}</TextInput>
            <TextInput style={styles.text}>{currency1}</TextInput>
            <TextInput style={styles.text}>{currency2}</TextInput>
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
    },
    text: {
        color: 'red'
    }
})