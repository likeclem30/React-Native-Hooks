import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetails from '../components/ImageDetails'

const ImageScreen = () => {
    return <View>
        <ImageDetails 
        title="Forest" 
        imageScore= '6' 
        imageSource={require('../../assets/forest.jpg')} 
        />

        <ImageDetails 
        title="Beach" 
        imageScore= '12' 
        imageSource={require('../../assets/beach.jpg')}
        />

        <ImageDetails 
        title="Mountain" 
        imageScore= '16' 
        imageSource={require('../../assets/mountain.jpg')}
        />
    </View>
};

const styles = StyleSheet.create({});

export default ImageScreen;