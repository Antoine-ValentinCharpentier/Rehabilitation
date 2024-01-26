import { Stack } from "expo-router";
import { SafeAreaView } from 'react-native';
import QuitButton from "../components/QuitButton";
import ClickCircleSection from '../components/ClickCircleSection';
import Rules from "../components/Rules";

const Home = () => {
    return (
        <SafeAreaView>
           <Stack.Screen
                options={{ headerShown: false }}
            />

            <QuitButton/>
            
            <Rules/>
            
            <ClickCircleSection />
        </SafeAreaView>
    )
}

  
export default Home;