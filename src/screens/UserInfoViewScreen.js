import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UserInfoViewScreen = ({ route, navigation }) => {
  const { fullName, age, height, allergies } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Information</Text>
      <Text>Name: {fullName}</Text>
      <Text>Age: {age}</Text>
      <Text>Height: {height} cm</Text>
      <Text>Allergies: {allergies}</Text>
      <Button
        title="Edit Information"
        onPress={() =>
          navigation.navigate('UserRegistration', {
            fullName,
            age,
            height,
            allergies,
          })
        }
      />
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
});

export default UserInfoViewScreen;
