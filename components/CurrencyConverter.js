import React from "react";
import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ConvertItem from './components/ConvertItem';


export default function CurrencyConverter() {

    {/* temporary mocks */ }
    const [currency, setCurrency] = useState([
        { text: 'BYN', key: 1 },
        { text: 'USD', key: 2 },
        { text: 'EUR', key: 3 },
    ]);
    return (
        <View>
            <View>
                {/* area with currency-input */}
                <FlatList
                    data={currency}
                    renderItem={({ item }) => (
                        <ConvertItem item={item} />
                    )}
                />
            </View>
        </View>

    )
}