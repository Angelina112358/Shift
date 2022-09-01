import React from 'react';
import { StyleSheet, View } from 'react-native';
import Row from './Row';
import Button from './Button';

export default function Choice() {
    return (
        <View>
            <Row>
                <Button text='Currency' />
                <Button text='Weight' />
            </Row>
            <Row>
                <Button text='Temperature' />
            </Row>
        </View>
    )
}

