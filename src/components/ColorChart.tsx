import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const ColorChart = () => {
  const [selectedButton, setSelectedButton] = useState(false);
  const colorChart = [
    {color: 'red'},
    {color: 'black'},
    {color: 'green'},
    {color: 'blue'},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Colors</Text>
      <View style={styles.sizeContainer}>
        <FlatList
          data={colorChart}
          horizontal
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={[
                  styles.colorBorder,
                  selectedButton == item.color && {
                    borderWidth: 2,
                    borderColor: item.color,
                  },
                ]}
                onPress={() => setSelectedButton(item.color)}>
                <View
                  style={[
                    styles.colorChartContainer,
                    {backgroundColor: item.color},
                  ]}></View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ColorChart;

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
  colorChartContainer: {
    height: 25,
    width: 25,
    borderRadius: 13,
  },
  colorBorder: {
    height: 35,
    width: 35,

    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});
