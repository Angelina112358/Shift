import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import Row from '../components/Row';


export default function Home({ navigation }) {    

    const pressCurrency = () => {
        navigation.push('Currency')
    };

    const pressTemperature = () => {
        navigation.push('Temperature')
    };

    const pressWeight = () => {
        navigation.push('Weight')
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* area with set of choices (currency, weight, temperature) */}
            <Row>
                <Button text='Currency' onPress={pressCurrency} />
            </Row>
            <Row>
                <Button text='Weight' onPress={pressWeight} />
            </Row>
            <Row>
                <Button text='Temperature' onPress={pressTemperature}/>
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
    },
    text: {
        color: 'white',
        backgroundColor: 'red',
    }
});