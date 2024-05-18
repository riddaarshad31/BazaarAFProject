import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import {addToCart} from '../redux/actions/actions';
import {useAppDispatch, useAppSelector} from '../redux/store/store';

const HomeScreen = () => {
  const navigation = useNavigation();
  const data = useAppSelector(state => state.data.products);

  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#5AB2FF'} />
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.productView}>
        <View style={styles.headerTextContainer}>
          <Image source={require('../Images/shoes.png')} style={styles.icon} />
          <Text style={styles.headerText}>Fashion</Text>
          <Text style={[styles.headerText, {color: '#5AB2FF'}]}>City </Text>
        </View>
        <View>
          <Text style={styles.para}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </View>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <View style={styles.productContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('productDetail', {item})}>
                  <Image source={item.image} style={styles.productImage} />
                  <Text style={styles.productTitle}>{item.title}</Text>
                  <Text style={styles.productPrice}>{item.price}</Text>
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.addToCartContainer}
                    onPress={() => dispatch(addToCart(item))}>
                    <Text style={styles.buttonText}>Add To Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '7%',
    width: '100%',
    backgroundColor: '#5AB2FF',
  },
  productView: {
    height: '92%',
    width: '100%',
  },
  headerTextContainer: {
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 25,
    marginStart: 10,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'black',
  },

  productContainer: {
    marginStart: 10,
  },
  productImage: {
    height: 160,
    width: 160,
    marginTop: 30,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 15,
    color: 'black',
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 13,
    color: 'grey',
  },
  icon: {
    height: 30,
    width: 30,
    margin: 10,
  },
  para: {
    margin: 10,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    marginEnd: 10,
  },
  addToCartContainer: {
    height: 25,
    width: 90,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
  },
});
