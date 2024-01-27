import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import { COLORS, SIZES } from '../constants';

const HEIGHT_QUIT_BTN = 2 * SIZES.quitBtn.padding + SIZES.font.medium
const HEIGHT_BANNER_RULES = SIZES.font.medium
const WIDTH_SCREEN = Dimensions.get('window').width
const HEIGHT_SCREEN = Dimensions.get('window').height - HEIGHT_QUIT_BTN - HEIGHT_BANNER_RULES

const generateNewSize = (oldSize) => {
    return Math.max(SIZES.circle.min, oldSize - SIZES.circle.step);
}

const ClickCircleSection = forwardRef((props, ref) => {
    const [circleSize, setCircleSize] = useState(SIZES.circle.default);

    const generateCoordForCircle = () => {
        return {
            left: Math.random() * (WIDTH_SCREEN - circleSize),
            top: Math.random() * (HEIGHT_SCREEN - circleSize),
        }
    }

    const [circlePosition, setCirclePosition] = useState(generateCoordForCircle());
    
    const handleCirclePress = () => {
        const newCoord = generateCoordForCircle()
        setCirclePosition(newCoord);
        setCircleSize(prevSize => generateNewSize(prevSize))
    };

    const resetCircle = () => {
        setCirclePosition(generateCoordForCircle())
        setCircleSize(SIZES.circle.default)
    }

    useImperativeHandle(ref, () => ({
        resetCircle, 
    }));

    return (
        <View>
            <TouchableOpacity 
                onPress={handleCirclePress} 
                style={{
                    ...styles.circle(circleSize), 
                    left: circlePosition.left,
                    top: circlePosition.top
                }} 
            />
        </View>
    )
});

const styles = StyleSheet.create({
    circle: (size) => ({
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: size/2,
        backgroundColor: COLORS.background.blue
    })
});

export default ClickCircleSection;