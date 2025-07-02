import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ChatInput = ({ onToggleFloating }) => {
  const [text, setText] = useState('');
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Send Message"
          value={text}
          onChangeText={setText}
          placeholderTextColor="#999999"
          multiline
        />
        <TouchableOpacity style={styles.attachBtn} onPress={onToggleFloating}>
          <Text style={styles.attachIcon}>📎</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendBtn}>
          <Text style={styles.sendIcon}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#F2F2F7',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 44,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    maxHeight: 100,
    paddingVertical: 8,
  },
  attachBtn: {
    padding: 8,
    marginLeft: 8,
  },
  attachIcon: {
    fontSize: 20,
    color: '#007AFF',
  },
  sendBtn: {
    padding: 8,
    marginLeft: 4,
  },
  sendIcon: {
    fontSize: 20,
    color: '#007AFF',
  },
});

export default ChatInput;