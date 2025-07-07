import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import add from '../assets/images/add.png';
import camera from '../assets/images/camera.png';
import corner from '../assets/images/Corner.png';
import videocamera from '../assets/images/video.png';

const FloatingButtons = () => (
  <View style={styles.wrapper}>
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Image source={camera} style={styles.icon} resizeMode="contain" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Image source={videocamera} style={styles.icon} resizeMode="contain" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Image source={add} style={styles.icon} resizeMode="contain" />
      </TouchableOpacity>
    </View>
    <Image source={corner} style={styles.corner} resizeMode="contain" />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: '#009900',
    // borderRadius: 28,
    position: 'absolute',
    right: 25,
    bottom: 50,
    flex:1,
    // flexDirection: 'row',
    // height:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
   container: {
    backgroundColor: '#008000',
    borderRadius: 28,
    // position: 'absolute',
    right: 5,
    // bottom: 40,
    flexDirection: 'row',
    flex: 3,
    // height:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    // backgroundColor: '#009900',
    margin:0,
    width: 40,
    height: 40,
    // borderRadius: 28,
    borderColor: '#FFFFFF',
    // alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // alignItems: 'center',
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    // shadowRadius: 8,
    // elevation: 5,
  },
   icon: {
    // fontSize: 24,
    fontWeight: 'bold',
    fontcolor: '#FFFFFF',
    height: 25,
    width: 20,
  },
  corner: {
    marginTop: 6,
    height: 12,
    width: 40,
    bottom:10,
    // right:50
  },
});

export default FloatingButtons;