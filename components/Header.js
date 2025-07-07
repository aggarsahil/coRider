import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backIcon from '../assets/images/back-icon.png';
import dots from '../assets/images/dots-vertical.png';
import edit from '../assets/images/edit.png';
import group from '../assets/images/group.png';
import theme from '../theme';
import { ms } from '../utils/Scale';

const Header = ({ onMenu }) => (
  <View style={styles.container}>
    
    <View style={styles.info}>
      <View style={styles.titleRow}>
        <View style={styles.titleLeft}>
          <TouchableOpacity>
            <Image source={backIcon} style={styles.backArrow} />
          </TouchableOpacity>
          <Text style={styles.tripTitle}>Trip 1</Text>
        </View>
        <TouchableOpacity>
          <Image source={edit} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>

      <View style={styles.tripDetails}>
        <Image source={group} style={styles.avatar} />
        <View>
          <Text style={styles.from}>From <Text style={styles.bold}>IGI Airport, T3</Text></Text>
          <Text style={styles.to}>To <Text style={styles.bold}>Sector 28</Text></Text>
        </View>
      </View>
    </View>
    <TouchableOpacity onPress={onMenu}>
      <Image source={dots} style={styles.menuIcon}/>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: ms(16),
    // paddingTop: ms(5),
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  backArrow: {
    fontSize: 30,
    // width:30,
    color: theme.colors.text,
    marginRight: 12,
  },
  info: { flex: 1 },
  tripTitle: {
    fontWeight: 'bold',
    fontSize: 20,

    color: theme.colors.text,
    // marginBottom: 10,
    marginLeft:10
  },
  tripDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 8,
  },
  titleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 14,
    borderColor:'#000000',
    marginRight: 15,
  },
  from: { fontSize: 13, color: theme.colors.text },
  to: { fontSize: 13, color: theme.colors.text },
  bold: { fontWeight: 'bold' },
  menuIcon: {
    // fontSize: 100,
    width: 10,
    height: 20,
    angle: 0 ,
    opacity: 4,
    top: 20 ,
    right:15
    // left: 11,
    // borderWidth:2,
  },
});

export default Header; 