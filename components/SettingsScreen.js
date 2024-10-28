import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => (
  <View style={styles.container}>
    <Text>К сожалению ничего нет</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;