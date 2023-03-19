import React from "react";
import Hero from "../../screens/hero";
import SignIn from "../../screens/sign-in";
import Home from "../../screens/home";
import CheckEmail from "../../components/sections/Welcome/check-email";
import PasswordRecovery from "../../components/sections/Welcome/password-recovery";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Hero' component={Hero} />
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='PasswordRecovery' component={PasswordRecovery} />
      <Stack.Screen name='CheckEmail' component={CheckEmail} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  );
};

export default StackNav;
