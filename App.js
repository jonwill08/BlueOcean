import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ValetTabs from './client/valet/components/ValetTabs';
import UHP from './client/user/components/UserHomePage'
import React, { useState } from 'react';
// import { router } from 'expo-router';

export default function App() {
  const [ emp, setEmp ] = useState(true);
  return (
    // <UHP/>
      <ValetTabs/>
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
