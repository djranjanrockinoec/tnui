import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/welcome-screen";
import DetailsScreen from "../screens/detailScreen";

const Stack = createStackNavigator();

const OnBoarding = () => {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                gestureEnabled: false,
            })}
            initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{
                headerShown: false,
            }} />
        </Stack.Navigator>
    )
};

export default OnBoarding;