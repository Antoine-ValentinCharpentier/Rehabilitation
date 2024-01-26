import { View, Text, StyleSheet } from "react-native"
import { COLORS, SIZES } from "../constants"

const Rules = () => {

    return <View style={styles.banner}>
            <Text style={styles.text}>
                <Text style={styles.boldText}>BUT : </Text>
                Cliquer sur le cercle  
                <Text style={styles.blueText}> BLEU</Text>
            </Text>
        </View>
}

const styles = StyleSheet.create({
    banner: {
        backgroundColor: COLORS.background.white,
    },
    text: {
        fontSize: SIZES.font.medium,
        textAlign: 'center'
    },
    boldText: {
        fontWeight: 'bold',
    },
    blueText: {
        color: COLORS.font.blue,
        fontWeight: 'bold'
    }
  });

export default Rules