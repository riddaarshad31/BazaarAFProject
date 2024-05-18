import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ProductDynamicData from '../components/ProductDynamicData';
import SizeChart from '../components/SizeChart';
import ColorChart from '../components/ColorChart';
import QuantityCounter from '../components/QuantityCounter';
import Button from '../components/Button';
import {useAppDispatch, useAppSelector} from '../redux/store/store';
import {addToCart} from '../redux/actions/actions';

const ProductDetail = ({navigation, route}) => {
  const dispatch = useAppDispatch();
  const items = route.params.item;
  const product = useAppSelector(state => state.data?.cart);
  const cart = product?.filter(item => item.id === items.id);
  const isProductInCart = cart?.length !== 0;

  const handleAddToCart = () => {
    dispatch(addToCart(items));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../Images/arrow.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Image
          source={require('../Images/question.png')}
          style={styles.helpIcon}
        />
      </View>
      <View style={styles.imageDataContainer}>
        <ProductDynamicData
          image={items.image}
          price={items.price}
          title={items.title}
        />
      </View>
      <View style={styles.sizeChartContainer}>
        <SizeChart />
      </View>
      <View style={styles.colorChartContainer}>
        <ColorChart />
      </View>

      {isProductInCart ? (
        <View style={styles.incrementDecrementContainer}>
          <QuantityCounter item={cart[0]} />
        </View>
      ) : (
        <View style={styles.Button}>
          <Button onPress={handleAddToCart} title={'Add To Cart'} />
        </View>
      )}
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: '7%',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    height: 30,
    width: 30,
    marginStart: 10,
  },
  helpIcon: {
    height: 30,
    width: 30,
    marginEnd: 10,
  },
  imageDataContainer: {
    height: '50%',
    width: '90%',
    backgroundColor: '#A0DEFF',
    alignSelf: 'center',
    borderRadius: 20,
  },
  sizeChartContainer: {
    height: '10%',
    width: '90%',
    marginTop: 10,
    alignSelf: 'center',
  },
  colorChartContainer: {
    height: '10%',
    width: '90%',
    marginTop: 10,
    alignSelf: 'center',
  },
  incrementDecrementContainer: {
    height: '6%',
    width: '80%',
    marginTop: 10,
    alignSelf: 'center',
  },
  Button: {
    height: '6%',
    width: '80%',
    marginTop: 20,
    alignSelf: 'center',
  },
});
