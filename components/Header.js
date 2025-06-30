import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import theme from '../theme';

const Header = ({ onMenu }) => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Text style={styles.backArrow}>{'<'}</Text>
    </TouchableOpacity>
    <View style={styles.info}>
      <Text style={styles.tripTitle}>Trip 1</Text>
      <View style={styles.tripDetails}>
        <Image source={{ uri: 'https://img.icons8.com/color/48/airport.png' }} style={styles.avatar} />
        <View>
          <Text style={styles.from}>From <Text style={styles.bold}>IGI Airport, T3</Text></Text>
          <Text style={styles.to}>To <Text style={styles.bold}>Sector 28</Text></Text>
        </View>
      </View>
    </View>
    <TouchableOpacity onPress={onMenu}>
      <Text style={styles.menuIcon}>⋮</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  backArrow: {
    fontSize: 24,
    color: theme.colors.text,
    marginRight: 12,
  },
  info: { flex: 1 },
  tripTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.colors.text,
    marginBottom: 2,
  },
  tripDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
  },
  from: { fontSize: 13, color: theme.colors.text },
  to: { fontSize: 13, color: theme.colors.text },
  bold: { fontWeight: 'bold' },
  menuIcon: {
    fontSize: 28,
    color: theme.colors.text,
    marginLeft: 12,
  },
});

export default Header; 