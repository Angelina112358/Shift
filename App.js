import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/Header';
import ConvertItem from './components/ConvertItem';
import Row from './components/Row';
import Button from './components/Button';


export default function App() {
  {/* temporary mocks */}
  const [currency, setCurrency] = useState([
    { text: 'BYN', key: 1 },
    { text: 'USD', key: 2 },
    { text: 'EUR', key: 3 },
  ]);
  return (
    <View>
      <StatusBar style="auto" />
      <Header />
      <View>
        {/* area with currency-input */}
        <FlatList
          data={currency}
          renderItem={({ item }) => (
            <ConvertItem item={item} />
          )}
        />
      </View>
      <View style={styles.areaNumbers}>
        {/* area with set of numbers */}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaNumbers:{
    // REFACTOR!!!
    marginTop: 70,
  }
});
