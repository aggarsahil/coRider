import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import theme from '../theme';

const ChatInput = ({ onToggleFloating }) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.iconBtn}>
        <Text style={styles.icon}>+</Text>
      </TouchableOpacity> */}
      <TextInput
        style={styles.input}
        placeholder="Reply to Rohit Yadav"
        value={text}
        onChangeText={setText}
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.iconBtn} onPress={onToggleFloating}>
        <Text style={styles.icon}>🔗</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.iconBtn}>
        <Text style={styles.icon}>📷</Text> 
      </TouchableOpacity>*/}
      <TouchableOpacity >
        <Text > ➤</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.input,
    padding: 8,
    borderRadius: 24,
    margin: 12,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 2,
  },
  input: {
    flex: 1,
    backgroundColor: theme.colors.input,
    borderRadius: 20,
    paddingHorizontal: 12,
    fontSize: 15,
    color: theme.colors.text,
  },
  iconBtn: {
    padding: 8,
  },
  icon: {
    fontSize: 20,
    color: theme.colors.icon,
  },
  sendBtn: {
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    padding: 10,
    marginLeft: 4,
  },
  sendIcon: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ChatInput; 