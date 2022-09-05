import React from "react";
import { useState } from 'react';
import { View, FlatList } from 'react-native';
import ConvertItem from '../components/ConvertItem';
import Numbers from '../components/Numbers';

export default function Currency() {

    const pressHandler = ({ navigation }) => {
        navigation.goBack()
    }

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
            <Numbers />
        </View>

    )
}