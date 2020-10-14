import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import services from '@swanners/core/services';

export default function App() {
  useEffect(() => {
    services.auth().onAuthStateChanged((user) => console.log(user));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text>Open up App.tsx to start working on your app!</Text>
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
