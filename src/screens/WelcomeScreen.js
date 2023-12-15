import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Human Health</Text>
      
      <Button
        title="Create Account"
        onPress={() => navigation.navigate('UserRegistration')}
        color="#FF6961"
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          <Text style={styles.poweredBy}>Powered by</Text>{' '}
          <Text style={styles.italic}>Sakura Code Projects</Text>
        </Text>
      </View>
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
    color: '#007AFF',
  },
  logo: {
    width: 100, // ajuste conforme necessário
    height: 100, // ajuste conforme necessário
    marginTop: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#888',
  },
  poweredBy: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
});

export default WelcomeScreen;
