import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const DataViewScreen = ({ navigation, route }) => {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data View Screen</Text>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item}</Text>
          </View>
        )}
      />
      <Button
        title="Edit Data"
        onPress={() => navigation.navigate('EditData', { data })}
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
    color: '#000',
  },
  list: {
    marginTop: 16,
    width: '100%',
  },
  listItem: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  listItemText: {
    fontSize: 16,
    color: '#000',
  },
});

export default DataViewScreen;
