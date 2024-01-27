import React, { useRef } from 'react';
import { Stack } from "expo-router";
import { SafeAreaView } from 'react-native';
import QuitButton from "../components/QuitButton";
import ClickCircleSection from '../components/ClickCircleSection';
import Rules from "../components/Rules";

const Home = () => {
    const circleRef = useRef(null);
    const clearAllStates = () => {
        circleRef.current.resetCircle();
    }
    return (
        <SafeAreaView>
           <Stack.Screen
                options={{ headerShown: false }}
            />

            <QuitButton additionalTask={clearAllStates}/>
            
            <Rules/>
            
            <ClickCircleSection ref={circleRef} />
        </SafeAreaView>
    )
}

  
export default Home;