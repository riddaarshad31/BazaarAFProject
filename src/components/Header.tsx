import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../redux/store/store';

const Header = () => {
  const navigation = useNavigation();
  const productsInCart = useAppSelector(state => state.data.cart.length);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('MyCart')}
        style={styles.topIcon}>
        <View style={styles.itemQuantityContainer}>
          <Text style={styles.quantity}>{productsInCart}</Text>
        </View>
        <Image
          source={require('../Images/shopping-cart.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    // marginStart: 10,
  },
  itemQuantityContainer: {
    width: 15,
    backgroundColor: 'red',
    position: 'absolute',
    right: 25,
    bottom: 14,
    borderRadius: 10,
    height: 15,
    zIndex: 1,
  },
  icon: {
    height: 24,
    width: 24,
    marginEnd: 10,
    tintColor: 'white',
  },
  quantity: {
    color: 'white',
    fontSize: 11,
    alignSelf: 'center',
  },
  topIcon: {},
});
