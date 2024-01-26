import { Stack } from "expo-router";
import { SafeAreaView, Text } from "react-native";
import QuitButton from "../components/QuitButton";

const Home = () => {
    return (
        <SafeAreaView>
           <Stack.Screen
                options={{ headerShown: false }}
            />
            <QuitButton/>
            <Text>Cliquer sur le cercle VERT</Text>
            
        </SafeAreaView>
    )
}

export default Home;