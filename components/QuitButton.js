import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BackHandler } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';

const QuitButton = () => {
  const handleQuit = () => {
    BackHandler.exitApp();
  };

  return (
    <TouchableOpacity onPress={handleQuit}>
      <View style={styles.button}>
        <Ionicons name="close" size={SIZES.quitBtn.padding} color={COLORS.font.white} style={styles.icon} />
        <Text style={styles.buttonText}>Quitter</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.background.red,
    width: '100%',
    padding: SIZES.quitBtn.padding,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: COLORS.font.white,
    fontSize: SIZES.font.medium,
    fontWeight: 'bold',
  },
});

export default QuitButton;
