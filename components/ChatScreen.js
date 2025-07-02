import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  Pressable,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import FloatingButtons from './FloatingButtons';
import Header from './Header';
import MenuModal from './MenuModal';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [floatingVisible, setFloatingVisible] = useState(false);

  const fetchMessages = async (pageNum) => {
    setLoading(true);
    try {
      const res = await axios.get(`https://qa.corider.in/assignment/chat?page=${pageNum}`);
      setMessages((prev) => [...res.data.chats.reverse(), ...prev]);
    } catch (e) {
      console.log('Error fetching messages:', e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages(page);
  }, [page]);

  const handleLoadMore = () => {
    if (!loading) setPage((prev) => prev + 1);
  };

  const dismissAll = () => {
    setFloatingVisible(false);
    Keyboard.dismiss(); // hides keyboard too
  };

  return (
    <Pressable style={styles.container} onPress={dismissAll}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header onMenu={() => setMenuVisible(true)} />

      <FlatList
        data={messages}
        renderItem={({ item }) => <ChatBubble message={item} />}
        keyExtractor={(item) => item.id.toString()}
        inverted
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.2}
        ListFooterComponent={
          loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#007AFF" />
            </View>
          ) : null
        }
        contentContainerStyle={styles.messagesList}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />

      <ChatInput onToggleFloating={() => setFloatingVisible((v) => !v)} />

      {floatingVisible && <FloatingButtons />}

      <MenuModal visible={menuVisible} onClose={() => setMenuVisible(false)} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  messagesList: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  loadingContainer: {
    padding: 20,
    alignItems: 'center',
  },
});

export default ChatScreen;
