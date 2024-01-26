import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

const generateCoordForCircle = () => {
    return {
        left: Math.random() * (widthScreen - 60),
        top: Math.random() * (heightScreen - 60),
    }
}

const ClickCircleSection = () => {
    const [circlePosition, setCirclePosition] = useState(generateCoordForCircle());
    
    const handleCirclePress = () => {
        const newCoord = generateCoordForCircle()
        setCirclePosition(newCoord);
    };

    return (
        <TouchableOpacity 
            onPress={handleCirclePress} 
            style={{
                ...styles.btn, 
                left: circlePosition.left,
                top: circlePosition.top
            }} 
        />
    )
}

const styles = StyleSheet.create({
    btn: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#0080ff"
    },
});

export default ClickCircleSection;