import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ConvertItem from './components/ConvertItem';
import Header from './components/Header';


export default function App() {
  {/* temporary mocks */}
  const [currency, setCurrency] = useState([
    { text: 'BYN', key: 1 },
    { text: 'USD', key: 2 },
    { text: 'EUR', key: 3 },
  ]);
  return (
    <View>
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
      <View>
        {/* area with set of numbers */}
      </View>
      <StatusBar style="auto" />
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
});
