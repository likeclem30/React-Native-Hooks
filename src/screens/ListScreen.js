import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Jonah', age: 20},
    { name: 'Francis', age: 21},
    { name: 'Joseph', age: 22},
    { name: 'Biodun', age: 23},
    { name: 'Peter', age: 24},
    { name: 'James', age: 25},
    { name: 'Bitrus', age: 26},
    { name: 'Sunday', age: 27},
    { name: 'Yacob', age: 28},
    { name: 'Ahmed', age: 29},
    { name: 'Musa', age: 30},
  ];

  return(
    <FlatList
       //horizontal={true}
       //showsHorizontalScrollIndicator={false}
       keyExtractor = {(friends) => friends.name}
       data={friends}
       renderItem={({item}) => {
         return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
       }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
})

export default ListScreen;
