import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {removeFromCart, updateQuantity} from '../redux/actions/actions';
import {useAppDispatch, useAppSelector} from '../redux/store/store';
import _ from 'lodash';

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartData = useAppSelector(state => state.data?.cart);

  return (
    <View style={styles.container}>
      <FlatList
        data={cartData}
        renderItem={({item, index}) => {
          return (
            <View style={styles.productContainer} key={index}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Image source={item.image} style={styles.productImage} />
                </TouchableOpacity>
                <View style={{width: '74%'}}>
                  <Text style={styles.productTitle}>{item.title}</Text>
                  <View style={styles.cartBottomData}>
                    <Text style={styles.productPrice}>{item.price}</Text>
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity
                        onPress={() => {
                          const newData = _.cloneDeep(cartData);
                          newData[index].quantity = item.quantity - 1;
                          if (item.quantity === 1) {
                            dispatch(removeFromCart(item.id));
                          } else {
                            dispatch(updateQuantity(newData));
                          }
                        }}>
                        <Image
                          source={require('../Images/minus.png')}
                          style={styles.icon}
                        />
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>{item.quantity}</Text>
                      <TouchableOpacity
                        onPress={() => {
                          const newData = _.cloneDeep(cartData);
                          newData[index].quantity = item.quantity + 1;
                          dispatch(updateQuantity(newData));
                        }}>
                        <Image
                          source={require('../Images/more.png')}
                          style={styles.icon}
                        />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => dispatch(removeFromCart(item.id))}>
                      <Text style={styles.buttonText}>Remove Item</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  productContainer: {
    margin: 10,
    height: 80,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  productImage: {
    height: 60,
    width: 60,
    margin: 10,
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 18,
    color: 'black',
    marginStart: 10,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 15,
    color: 'black',
    marginStart: 10,
    marginTop: 5,
  },
  button: {
    height: 25,
    width: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
  },
  cartBottomData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  quantityContainer: {
    height: 25,
    width: 25,
    backgroundColor: '#EEEEEE',
    alignSelf: 'flex-end',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  quantityText: {
    fontSize: 15,
  },
  icon: {
    height: 18,
    width: 18,
    margin: 12,
  },
});
