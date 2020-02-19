import React, { useState } from 'react';
import {Text, View, TextInput, StyleSheet } from 'react-native';


const TextScreen = () => {
    const [ name, setName ] = useState('');
    return(
        <View>
            <Text>Enter Name:</Text>
            <TextInput 
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            value = {name}
            onChangeText={(newName) => setName(newName)}
            />
            <Text>My Name is :{name}</Text>
            {name.length < 4 ? <Text>Name must be more than 4 Characters</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth: 1
    }
});

export default TextScreen;