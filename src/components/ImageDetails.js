import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const ImageDetails = ({ imageSource, title, imageScore }) => {
//const ImageDetails = (props) => {
    //console.log(props)
    return (
    <View>
        <Image source={imageSource} />
        <Text>{title}</Text>
        <Text>Image Score - {imageScore}</Text>
    </View>
    )
};

const styles = StyleSheet.create({});

export default ImageDetails;