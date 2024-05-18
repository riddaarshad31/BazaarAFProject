import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {loadProducts} from '../redux/actions/actions';
import {FCImage} from '../Images/constants';
import {useAppDispatch} from '../redux/store/store';

const SplashScreen = () => {
  const dispatch = useAppDispatch();

  const data = [
    {id: 1, image: FCImage.RED_SNEAKER, title: 'Sport Fashion', price: '$37'},
    {
      id: 2,
      image: FCImage.BLUE_SNEAKER,
      title: 'Evil Eye Fashion',
      price: '$25',
    },
    {id: 3, image: FCImage.GREY_SNEAKER, title: 'Asian Fashion', price: '$40'},
    {
      id: 4,
      image: FCImage.YELLOW_SNEAKER,
      title: 'Avengers Fashion',
      price: '$32',
    },
    {id: 5, image: FCImage.PINK_SNEAKER, title: 'Girly Fashion', price: '$30'},
  ];

  useEffect(() => {
    dispatch(loadProducts(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../Images/shoes.png')} style={styles.icon} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: '40%',
    width: '40%',
    resizeMode: 'contain',
  },
});
