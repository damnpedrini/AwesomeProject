import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const UserRegistrationScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [allergies, setAllergies] = useState('');

  const handleSave = () => {
    // Adicione lógica para salvar os dados do usuário (pode usar AsyncStorage, banco de dados, etc.)
    // Neste exemplo, apenas exibimos as informações no console
    console.log('User Information:', { fullName, age, height, allergies });

    // Navegar para a tela de visualização de informações
    navigation.navigate('UserInfoView', {
      fullName,
      age,
      height,
      allergies,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Allergies"
        value={allergies}
        onChangeText={(text) => setAllergies(text)}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#007AFF',
  },
  input: {
    height: 40,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    width: '100%',
    color: '#000',
  },
});

export default UserRegistrationScreen;
