import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EditDataScreen = ({ navigation, route }) => {
  const { data } = route.params;
  const [editedData, setEditedData] = useState(data);

  const handleSave = () => {
    // Adicionar aqui a lógica para salvar os dados editado em um futuro banco de dados
    navigation.navigate('DataView', { data: editedData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Data Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Edit data"
        value={editedData}
        onChangeText={(text) => setEditedData(text)}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
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

export default EditDataScreen;
