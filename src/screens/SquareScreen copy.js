import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    console.log(red);

    const setColor = (color, change) => {
        //halting the decrease of value below 0 and above 256
        //color = red,green, blue
        //change +10 , -10
       // if (color === 'red'){
         //   if(red +change > 255 || red + change < 0){
           //     return;
           // } else{
             //   setRed(red + change);
            //}
        
        /*method two(2)
            switch (color){
                case 'red':
                    if(red + change > 255 || red + change < 0){
                    return;
                } else{
                setRed(red + change);
            }
            return; */

         //Method 3 Atenary expression  
         switch(color){
            case 'red':
                 red + change > 255 || red + change < 0 ? null : setRed(red + change);
                    return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                    return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                    return;
        }
    };

    return(
        <View>
            <ColorCounter 
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                //onIncrease={() => setRed(red + COLOR_INCREMENT)}
                //onDecrease={() => setRed(red - COLOR_INCREMENT)}
                color="Red"
            />

            <ColorCounter color="Blue"
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
                //onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
                //onDecrease={() => setBlue(blue - COLOR_INCREMENT)} 
                color="Blue"  
            />
            <ColorCounter color="Green"
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
                //onIncrease={() => setGreen(green + COLOR_INCREMENT)}
                //onDecrease={() => setGreen(green - COLOR_INCREMENT)}
                color="Green"  
            />
            <View
                style={{height:150, width:150, backgroundColor: `rgb(${red},${green},${blue})`}}
            />

        </View>
    );
};

const textStyles = StyleSheet.create({});

export default SquareScreen;