import React from 'react';
import { StyleSheet, View } from 'react-native';
import ChatScreen from '../../components/ChatScreen';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ChatScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});