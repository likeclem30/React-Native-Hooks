import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = props => {
  //console.log(props.navigation)
  return(
    <View>
        <Text style={styles.text}>HomeScreen</Text>
        <Button
            //onPress={() => console.log('Button press')}
            onPress={() => props.navigation.navigate('Components')}
            title="Go to Components Demo"/>
        
        <Button
            //onPress={() => console.log('Button press')}
            onPress={() => props.navigation.navigate('List')}
            title="List Demo"/>

        <Button
            //onPress={() => console.log('Button press')}
            onPress={() => props.navigation.navigate('Image')}
            title="Image Demo"/>

        <Button
            onPress={() => props.navigation.navigate('Counter')}
            title="Counter Demo"/>

        <Button
            onPress={() => props.navigation.navigate('Color')}
            title="Color Demo"/>

        <Button
            onPress={() => props.navigation.navigate('Square')}
            title="Square Demo"/>
        <Button
            onPress={() => props.navigation.navigate('TextScreen')}
            title="Text Demo"/>
        
        <Button
            onPress={() => props.navigation.navigate('BoxScreen')}
            title="Box Demo"/>

        <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
          <Text>Go to list Demo</Text>
          <Text>Go to list Demo</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
