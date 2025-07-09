import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import attach from '../assets/images/attach.png';
import send from '../assets/images/send.png';

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
          <Image source={attach} style={styles.attachIcon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendBtn}>
          <Image source={send} style={styles.sendIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF9F4',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    position:'relative',
  },
  inputContainer: {
    // position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor:  '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 44,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    // backgroundColor: '#FFFFFF',
    // borderRadius: 20,
    maxHeight: 100,
    // paddingVertical: 8,
    // paddingHorizontal: 16,
    // marginLeft: 8,
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