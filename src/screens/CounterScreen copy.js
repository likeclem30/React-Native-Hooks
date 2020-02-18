import React, {useState} from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
    //let counter = 0;
    const [counter, setCounter] = useState(0);

    return(
        <View>
            <Button
            title="Increase" 
            onPress={() => {
                //We dont modify state directly
                //counter++; 
                setCounter(counter + 1)
                console.log(counter);
                }} 
            />
            <Button
            title="Decrease" 
            onPress={() => {
                //counter--; 
                //console.log(counter); 
                setCounter(counter - 1)
                }} 
                />
            <Text>Current Counter :{counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;