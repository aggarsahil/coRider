import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ChatBubble = ({ message }) => {
  const isSelf = message.sender.self;
  return (
    <View style={[styles.container, isSelf ? styles.self : styles.other]}>
      {!isSelf && (
        <Image source={{ uri: message.sender.image }} style={styles.avatar} />
      )}
      <View style={[
        styles.bubble,
        isSelf ? styles.bubbleSelf : styles.bubbleOther
      ]}>
        <Text style={[
          styles.text,
          isSelf ? styles.textSelf : styles.textOther
        ]}>
          {message.message}
        </Text>
      </View>
      {isSelf && (
        <Image source={{ uri: message.sender.image }} style={styles.avatar} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  self: {
    justifyContent: 'flex-end',
  },
  other: {
    justifyContent: 'flex-start',
  },
  bubble: {
    maxWidth: '70%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  bubbleSelf: {
    backgroundColor: '#007AFF',
    borderBottomRightRadius: 6,
  },
  bubbleOther: {
    backgroundColor: '#E5E5EA',
    borderBottomLeftRadius: 6,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
  },
  textSelf: {
    color: '#FFFFFF',
  },
  textOther: {
    color: '#000000',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
});

export default ChatBubble;