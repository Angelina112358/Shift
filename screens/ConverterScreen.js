import React, { useEffect, useState, useRef, useCallback } from 'react';
import BigNumber from 'bignumber.js'
import { View, StyleSheet, Text } from 'react-native';
import MetricInput from '../components/panel_input/MetricInput';

import Button from '../components/native_components/Button';
import Row from '../components/native_components/Row';

const checkValue = (newValue) => {
    const MAX_ACCEPTED_LENGTH = 15
    const newLength = newValue.length
    const dotsCount = newValue.split('.').length - 1

    if (dotsCount > 1) {
        alert('You already have a dot in your number')
        return false
    }

    if (newLength > MAX_ACCEPTED_LENGTH) {
        alert('The maximum allowable input length has been reached')
        return false
    }

    if (newLength === MAX_ACCEPTED_LENGTH && newValue[newLength - 1] === '.') {
        alert('The maximum allowable input length has been reached')
        return false
    }

    return true
}

export default function ConverterScreen (props) {

    const data = props.data;
    const [state, setState] = useState(1);
    const [amount1, setAmount1] = useState('100');
    const [amount2, setAmount2] = useState('100');
    const [metric1, setMetric1] = useState(props.default);
    const [metric2, setMetric2] = useState(props.default);

    const [cursorPosition, setCursorPosition] = useState(0);
    const cursorPositionBackUp = useRef(0);

    function changeMainInput(value) {
        setState(value);
    };

    function handleTap(type, value) {
        const cursor = cursorPositionBackUp.current
        if (type === 'number' || type === 'dot')
            setAmount1(string => {
                const newValue = value.toString().slice(0, cursor) + value + value.toString().slice(cursor)
                const checkResult = checkValue(newValue)
                if (checkResult) {
                    setCursorPosition(cursorPositionBackUp.current + 1)
                    cursorPositionBackUp.current += 1
                    return newValue
                }
                else{
                   return value
                }
            })
        else if (type === 'clear')
            setAmount1(string => {
                
            })
    };
    
    function format(number) {
        return number;
    };
    const handleAmount1Change = (i) => {
        const m = isNumber(i);
        setAmount1(m);
        setAmount2(isNumber(m));
        //setAmount2(format(props.calculate(m, metric1, metric2)));
    };
    function handleMetric1Change(metric1) {
        setMetric1(metric1);
        //setAmount2(format(props.calculate(amount1, metric1, metric2)));
    };
    function handleAmount2Change(amount2) {
        //setAmount1(format(props.calculate(amount2, metric2, metric1)));
        //setAmount2(amount2);
    };
    function handleMetric2Change(metric2) {
        setMetric2(metric2);
    };
    
    // useEffect(() => {
    //     if (amount1 == 'NaN') setAmount1('0')
    //     if (amount2 == 'NaN') setAmount2('0')
    // }, [amount1, amount2])

    //#endregion

    useEffect(()=>{
        setAmount2(value => {
            if (amount1 === '' || amount1 === '.') return ''
            const result = props.calculate(amount1, metric1, metric2);
            let raw = Number(result).toFixed(13)

            while(raw.length > 0 && raw[raw.length - 1] === '0') raw = raw.slice(0, raw.length - 1)

            if (raw.length > 0 && raw[raw.length - 1] === '.') raw = raw.slice(0, raw.length - 1)

            return raw
        })
    }, [amount1, metric1, metric2, cursorPosition])

    const cursorPositionChangeHandler = (newPosition) => {
        setCursorPosition(newPosition)
        cursorPositionBackUp.current = newPosition
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputs}>
                <MetricInput
                    id={1}
                    onPress={changeMainInput}
                    metrics={Object.keys(data)}
                    amount={amount1}
                    metric={metric1}
                    //onAmountChange={handleAmount1Change}
                    onMetricChange={handleMetric1Change}
                    onCursorPositionChange={cursorPositionChangeHandler}
                    cursorPosition={cursorPosition}
                />
                <MetricInput
                    id={2}
                    onPress={changeMainInput}
                    metrics={Object.keys(data)}
                    amount={amount2}
                    metric={metric2}
                    onAmountChange={handleAmount2Change}
                    onMetricChange={handleMetric2Change}
                />
            </View>
            <View style={styles.numbers}>
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
                    <Button text="." onPress={() => handleTap("dot", ".")} />
                    <Button text="x" onPress={() => handleTap("clear")} />
                </Row>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    numbers: {
        marginTop: 100
    },
    inputs: {
        marginTop: 20
    },
})