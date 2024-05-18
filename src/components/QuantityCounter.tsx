import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {removeFromCart, updateQuantity} from '../redux/actions/actions';
import {useAppDispatch, useAppSelector} from '../redux/store/store';
import _ from 'lodash';

const QuantityCounter = ({item}) => {
  const cartData = useAppSelector(state => state.data?.cart);
  const dispatch = useAppDispatch();
  const newData = _.cloneDeep(cartData);
  const index = newData.findIndex(cart => cart.id === item.id);
  return (
    <View style={styles.incrementDecrementContainer}>
      <TouchableOpacity
        style={styles.minusIconContainer}
        onPress={() => {
          newData[index].quantity = item.quantity - 1;
          if (item.quantity === 1) {
            dispatch(removeFromCart(item.id));
          } else {
            dispatch(updateQuantity(newData));
          }
        }}>
        <Image source={require('../Images/minus.png')} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.quantity}>{item.quantity}</Text>

      <TouchableOpacity
        style={styles.plusIconContainer}
        onPress={() => {
          newData[index].quantity = item.quantity + 1;
          dispatch(updateQuantity(newData));
        }}>
        <Image source={require('../Images/more.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default QuantityCounter;

const styles = StyleSheet.create({
  incrementDecrementContainer: {
    height: '100%',
    width: '100%',
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plusIconContainer: {
    height: 30,
    width: 30,
    margin: 20,
  },
  minusIconContainer: {
    height: 30,
    width: 30,
    margin: 20,
  },
  icon: {height: 25, width: 25},
  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
