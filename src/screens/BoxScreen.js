import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {

    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Box Screen</Text>
            <Text style={styles.textTwoStyle}>Box Screen</Text>
            <Text style={styles.textThreeStyle}>Box Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: 'black',
       // alignItems: 'center', //'stretch' 'flex-start', 
        flexDirection: 'row',
        height:200,
        justifyContent: 'center' //'space-between' 'space-around'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
       // marginHorizontal: 20,
       // marginVertical: 20
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        //flex: 1
        alignSelf: 'stretch'
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
    }
});

export default BoxScreen;