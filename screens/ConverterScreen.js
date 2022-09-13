import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MetricInput from '../components/MetricInput';
import Numbers from '../components/Numbers';

export default function ConverterScreen(props) {

    function format(number) {
        return number.toFixed(4);
    }

    const data = props.data;

    const [amount1, setAmount1] = useState(100);
    const [amount2, setAmount2] = useState(100);
    const [metric1, setMetric1] = useState(props.default);
    const [metric2, setMetric2] = useState(props.default);

    function handleAmount1Change(amount1) {
        setAmount1(amount1);
        setAmount2(format(props.calculate(amount1, metric1, metric2)));
    };
    function handleMetric1Change(metric1) {
        setMetric1(metric1);
        setAmount2(format(props.calculate(amount1, metric1, metric2)));
    };
    function handleAmount2Change(amount2) {
        setAmount2(amount2);
        setAmount1(format(props.calculate(amount1, metric2, metric1)))
    };
    function handleMetric2Change(metric2) {
        setMetric2(metric2);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputs}>
                <MetricInput
                    metrics={Object.keys(data)}
                    amount={amount1}
                    metric={metric1}
                    onAmountChange={handleAmount1Change}
                    onMetricChange={handleMetric1Change}
                />
                <MetricInput
                    metrics={Object.keys(data)}
                    amount={amount2}
                    metric={metric2}
                    onAmountChange={handleAmount2Change}
                    onMetricChange={handleMetric2Change}
                />
            </View>
            <View style={styles.numbers}>
                <Numbers />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    numbers: {
        marginTop: 40
    },
    inputs: {
        marginTop: 20
    },
    text: {
        color: 'red'
    }
})