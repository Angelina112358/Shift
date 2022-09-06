import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import Row from '../components/Row';

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.push('Currency')
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* area with set of choices (currency, weight, temperature) */}
            <Row>
                <Button text='Currency' onPress={pressHandler} />
                <Button text='Weight' />
            </Row>
            <Row>
                <Button text='Temperature' />
            </Row>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    }
});