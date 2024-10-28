import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style = {styles.logo} source ={require('./todoist.png')}/>
      <Text style={styles.title}>Todoist</Text>
      <TouchableOpacity
        style={[styles.button, styles.roundedButton]}
        onPress={() => navigation.navigate('MainScreen')}
      >
        <Text style={styles.buttonText}>Начать</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#21541b',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  logo:{
    height: 90,
    width: 90,
  }
});

export default HomeScreen;