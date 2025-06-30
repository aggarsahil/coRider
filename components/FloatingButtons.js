import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import theme from '../theme';

const FloatingButtons = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.icon}>🎦</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.icon}>📷</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.icon}>📑</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 16,
    bottom: 80,
    flexDirection: 'column',
    gap: 12,
  },
  btn: {
    backgroundColor: theme.colors.primary,
    borderRadius: 24,
    padding: 12,
    marginBottom: 8,
    elevation: 2,
  },
  icon: {
    color: '#fff',
    fontSize: 20,
  },
});

export default FloatingButtons; 