import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import add from '../add.png';
import camera from '../camera.png';
import videocamera from '../video-camera.png';

const FloatingButtons = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.btn}>
      <Image source={camera} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn}>
      <Image source={videocamera} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn}>
      <Image source={add} style={styles.icon} />
    </TouchableOpacity>

  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#009900',
    borderRadius: 28,
    position: 'absolute',
    right: 20,
    bottom: 70,
    flexDirection: 'row',
    // height:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    // backgroundColor: '#009900',

    width: 50,
    height: 40,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  icon: {
    // fontSize: 24,
    fontWeight: 'bold',
    fontcolor: '#FFFFFF',
    height: 20,
    width: 20,
  },
});

export default FloatingButtons;