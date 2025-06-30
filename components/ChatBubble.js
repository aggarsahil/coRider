import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import theme from '../theme';

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
    marginBottom: 12,
    alignItems: 'flex-end',
  },
  self: {
    justifyContent: 'flex-end',
  },
  other: {
    justifyContent: 'flex-start',
  },
  bubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 16,
  },
  bubbleSelf: {
    backgroundColor: theme.colors.bubbleSelf,
    borderBottomRightRadius: 4,
    marginLeft: 40,
  },
  bubbleOther: {
    backgroundColor: theme.colors.bubbleOther,
    borderBottomLeftRadius: 4,
    marginRight: 8,
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
  },
  textSelf: {
    color: theme.colors.bubbleTextSelf,
  },
  textOther: {
    color: theme.colors.bubbleTextOther,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginHorizontal: 8,
  },
});

export default ChatBubble; 