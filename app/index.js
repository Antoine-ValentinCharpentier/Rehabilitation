import { Stack } from "expo-router";
import { SafeAreaView, Text } from "react-native";

const Home = () => {
    return (
        <SafeAreaView>
           <Stack.Screen
                options={{ headerShown: false }}
            />
            <Text>Cliquer sur le cercle VERT</Text>
        </SafeAreaView>
    )
}

export default Home;