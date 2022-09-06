import React from "react";
import { useState } from 'react';
import { View, FlatList } from 'react-native';
import CurrencyInput from '../components/CurrencyInput';
import Numbers from '../components/Numbers';

export default function Currency() {

    const pressHandler = ({ navigation }) => {
        navigation.goBack()
    }

    {/* temporary mocks */ }
    const [currency, setCurrency] = useState([
        { key: 1, text: 'BYN' },
        { key: 2, text: 'USD' },
    ]);

    return (
        <View>
            <View>
                {/* area with currency-input */}
                {/* <FlatList
                    data={currency}
                    renderItem={({ item }) => (
                        <CurrencyInput item={item} />
                    )}
                /> */}
                <CurrencyInput/>
                <CurrencyInput/>
            </View>
            <Numbers />
        </View>

    )
}