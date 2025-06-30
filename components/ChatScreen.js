import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Header from './Header';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import MenuModal from './MenuModal';
import FloatingButtons from './FloatingButtons';
import theme from '../theme';

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
      // handle error
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages(page);
  }, [page]);

  const handleLoadMore = () => {
    if (!loading) setPage((prev) => prev + 1);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Header onMenu={() => setMenuVisible(true)} />
      <FlatList
        data={messages}
        renderItem={({ item }) => <ChatBubble message={item} />}
        keyExtractor={(item) => item.id.toString()}
        inverted
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.2}
        ListFooterComponent={loading ? <ActivityIndicator /> : null}
        contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
      />
      <ChatInput onToggleFloating={() => setFloatingVisible(v => !v)} />
      {floatingVisible && <FloatingButtons />}
      <MenuModal visible={menuVisible} onClose={() => setMenuVisible(false)} />
    </View>
  );
};

export default ChatScreen; 