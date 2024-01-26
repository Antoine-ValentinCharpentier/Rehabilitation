import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

const generateNewSize = (oldSize) => {
    return Math.max(24, oldSize - 1);
}

const ClickCircleSection = () => {
    const [circleSize, setCircleSize] = useState(60);

    const generateCoordForCircle = () => {
        return {
            left: Math.random() * (widthScreen - circleSize),
            top: Math.random() * (heightScreen - circleSize),
        }
    }

    const [circlePosition, setCirclePosition] = useState(generateCoordForCircle());
    
    const handleCirclePress = () => {
        const newCoord = generateCoordForCircle()
        setCirclePosition(newCoord);
        setCircleSize(prevSize => generateNewSize(prevSize))
    };

    return (
        <TouchableOpacity 
            onPress={handleCirclePress} 
            style={{
                ...styles.circle(circleSize), 
                left: circlePosition.left,
                top: circlePosition.top
            }} 
        />
    )
}

const styles = StyleSheet.create({
    circle: (size) => ({
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: size/2,
        backgroundColor: "#0080ff"
    })
});

export default ClickCircleSection;