import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BackHandler } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const QuitButton = () => {
  const handleQuit = () => {
    BackHandler.exitApp();
  };

  return (
    <TouchableOpacity onPress={handleQuit}>
      <View style={styles.button}>
        <Ionicons name="close" size={24} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Quitter</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    width: '100%',
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default QuitButton;
