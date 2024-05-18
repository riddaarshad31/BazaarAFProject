import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const button = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default button;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#A0DEFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
