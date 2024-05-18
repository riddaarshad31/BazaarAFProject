import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductDynamicData = ({image, title, price}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.imageDataContainer}>
        <Text style={styles.dataText}>{title}</Text>
        <Text style={styles.dataText}>{price}</Text>
      </View>
    </View>
  );
};

export default ProductDynamicData;

const styles = StyleSheet.create({
  container: {flex: 1},
  imageContainer: {
    height: '88%',
    width: '90%',
  },
  image: {
    height: '95%',
    width: '95%',
    marginTop: 20,
    marginStart: 30,
    alignSelf: 'center',
  },
  imageDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dataText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginStart: 25,
    marginEnd: 25,
    margin: 10,
  },
});
