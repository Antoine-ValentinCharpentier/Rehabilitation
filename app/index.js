import { Stack } from "expo-router";
import { SafeAreaView, Text } from 'react-native';
import QuitButton from "../components/QuitButton";
import ClickCircleSection from '../components/ClickCircleSection';

const Home = () => {
    return (
        <SafeAreaView>
           <Stack.Screen
                options={{ headerShown: false }}
            />

            <QuitButton/>
            
            <Text>Cliquer sur le cercle BLEU</Text>
            
            <ClickCircleSection />
        </SafeAreaView>
    )
}

  
export default Home;