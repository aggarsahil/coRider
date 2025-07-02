import React from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import alert from '../alert.png';
import group from '../group.png';
import phone from '../phone.png';

const MenuModal = ({ visible, onClose }) => (
  <Modal
    visible={visible}
    transparent
    animationType="fade"
    onRequestClose={onClose}
  >
    <TouchableOpacity style={styles.overlay} onPress={onClose}>
      <View style={styles.menu}>
        <TouchableOpacity style={[styles.menuItem, styles.topItem]}>
          <Image source={group} style={styles.menuIcon} />
          <Text style={styles.menuText}>Members</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={phone} style={styles.menuIcon} />
          <Text style={styles.menuText}>Share Number</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItem, styles.bottomItem]}>
          <Image source={alert} style={styles.menuIcon} />
          <Text style={styles.menuText}>Report</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  </Modal>
);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  menu: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginTop: 100,
    marginRight: 16,
    minWidth: 180,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5EA',
  },
  topItem: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  bottomItem: {
    borderBottomWidth: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  menuIcon: {
    fontSize: 16,
    marginRight: 12,
    width: 20,
    height: 20,
  },
  menuText: {
    fontSize: 16,
    color: '#000000',
    flex: 1,
  },
});

export default MenuModal;