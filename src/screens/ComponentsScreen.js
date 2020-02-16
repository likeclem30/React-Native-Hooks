import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const ComponentsScreen = () => {
  const myname = <Text>William Aaron</Text>
  return <View>
            <Text style={styles.textStyle}>Getting Started with React Native</Text>
            <Text style={styles.secondTxtStyle}>My Name is {myname}</Text>
     </View>

};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  secondTxtStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
