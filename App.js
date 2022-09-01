import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/Header';
import Choice from './components/Choice';
import Numbers from './components/Numbers';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Header />
      {/* area with set of choices (currency, weight, temperature) */}
      <Choice /> 
      {/* area with set of numbers */}
      <Numbers />
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
