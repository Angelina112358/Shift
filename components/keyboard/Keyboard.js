// export const initialState = {
//     currentValue: "0",
// };

// export const isNumber = (value) => {
//     let convertedValue = value.toString();
//     let re = /^[-+]?[0-9]*[.,]?[0-9]*/;
//     if(convertedValue[-1])
//         alert('dot');

//     if ((convertedValue.split('.') || [] ).length - 1 > 1)
//         return convertedValue.slice(0, -1)
    
//     return convertedValue;
// };

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Row from '../native_components/Row';
import Button from '../native_components/Row';

export const KeybordItemTypes = {
    NUMBER: 'NUMBER',
    ERASE: 'ERASE',
    DOT: 'DOT'
}

// const BUTTONS = {
//     {text: '7', type: KeybordItemTypes.NUMBER},
//     {}
// }

export default ({theme, onPress}) => {
    return (
      <View style={styles.areaNumbers}>
        <Row>
          <Button text="7" onPress={() => handleTap("number", 7)} />
          <Button text="8" onPress={() => handleTap("number", 8)} />
          <Button text="9" onPress={() => handleTap("number", 9)} />
        </Row>
        <Row>
          <Button text="4" onPress={() => handleTap("number", 4)} />
          <Button text="5" onPress={() => handleTap("number", 5)} />
          <Button text="6" onPress={() => handleTap("number", 6)} />
        </Row>
        <Row>
          <Button text="1" onPress={() => handleTap("number", 1)} />
          <Button text="2" onPress={() => handleTap("number", 2)} />
          <Button text="3" onPress={() => handleTap("number", 3)} />
        </Row>
        <Row>
          <Button text="0" onPress={() => handleTap("number", 0)} />
          <Button text="." onPress={() => handleTap("number", ".")} />
          <Button text="x" onPress={() => handleTap("clear")} />
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
    areaNumbers: {
      marginTop: 20
    }
  });

