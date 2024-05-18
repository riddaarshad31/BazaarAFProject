import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Cart from '../screens/Cart';
import ProductDetail from '../screens/ProductDetail';

const Stack = createNativeStackNavigator();

function HomeRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyCart"
          component={Cart}
          options={{
            title: 'My Cart',
            headerTitleStyle: {fontWeight: 'bold'},
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#5AB2FF'},
          }}
        />

        <Stack.Screen
          name="productDetail"
          component={ProductDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeRoute;
