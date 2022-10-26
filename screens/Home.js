import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Button from '../components/native_components/Button';
import Row from '../components/native_components/Row';

import * as ScreenOrientation from 'expo-screen-orientation';


export default function Home({ navigation }) {    
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

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
});