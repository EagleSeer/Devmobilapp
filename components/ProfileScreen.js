import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const myAvatar = require('./avatar.jpg');
  const myName = 'Доркас Факуинги бикинду';
  const [username, setUsername] = useState();
  const [fullname, setFullname] = useState();
  
  return (
    <View style={styles.container}>
    <View style={styles.profileInfo}>
        <Image source={myAvatar} style={styles.myavatar} />
        <Text style={styles.myname}>{myName}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Имя"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Фамилия"
        value={fullname}
        onChangeText={(text) => setFullname(text)}
      />
      <TouchableOpacity
        style={[styles.button, styles.uploadButton]}
        onPress={() => console.log('Выбрано!')}
      >
        <Text style={styles.uploadbuttonText}>Выбрать фото</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, styles.saveButton]}
        onPress={() => console.log('Сохранено!')}
      >
        <Text style={styles.savebuttonText}>Сохранить</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  myavatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  myname: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  uploadbuttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  savebuttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#21541b',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});

export default ProfileScreen;
