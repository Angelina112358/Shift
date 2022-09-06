import React from 'react';
import { StyleSheet, View } from 'react-native';
import Row from './Row';
import Button from './Button';

export default function Numbers() {
    return(
        <View style={styles.areaNumbers}>
        <Row>
          <Button text="7"/>
          <Button text="8"/>
          <Button text="9"/>
        </Row>
        <Row>
          <Button text="4"/>
          <Button text="5"/>
          <Button text="6"/>
        </Row>
        <Row>
          <Button text="1"/>
          <Button text="2"/>
          <Button text="3"/>
        </Row>
        <Row>
          <Button text="0"/>
          <Button text=","/>
          <Button text="x"/>
        </Row>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    areaNumbers:{
      marginTop: 20
    }
  });