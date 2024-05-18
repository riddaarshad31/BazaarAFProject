import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const SizeChart = () => {
  const [selectedButton, setSelectedButton] = useState(false);
  const sizeChart = [
    {Size: 38},
    {Size: 39},
    {Size: 40},
    {Size: 41},
    {Size: 42},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Size</Text>
      <View style={styles.sizeContainer}>
        <FlatList
          data={sizeChart}
          horizontal
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.sizeChartContainer}
                onPress={() => setSelectedButton(item.Size)}>
                <Text
                  style={[
                    styles.size,
                    selectedButton == item.Size && {color: 'red'},
                  ]}>
                  {item.Size}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default SizeChart;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  sizeContainer: {
    height: '80%',
    width: '100%',
  },
  size: {
    fontSize: 20,
    color: 'black',
  },
  sizeChartContainer: {
    backgroundColor: 'white',
    height: 35,
    width: 35,
    borderRadius: 18,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
