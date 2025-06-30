import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../theme';

const MenuModal = ({ visible, onClose }) => (
  <Modal
    visible={visible}
    transparent
    animationType="fade"
    onRequestClose={onClose}
  >
    <TouchableOpacity style={styles.overlay} onPress={onClose}>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>
          {/* <FontAwesomeIcon icon="fa-solid fa-users" fade /> */}
          👥 Members</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>📞 Share Number</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>✉️ Report</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  </Modal>
);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#0002',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  menu: {
    backgroundColor: theme.colors.menuBg,
    borderRadius: 12,
    marginTop: 60,
    marginRight: 16,
    paddingVertical: 8,
    width: 180,
    borderWidth: 1,
    borderColor: theme.colors.menuBorder,
    elevation: 4,
  },
  menuItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.menuBorder,
  },
  menuText: {
    fontSize: 16,
    color: theme.colors.text,
  },
});

export default MenuModal; 