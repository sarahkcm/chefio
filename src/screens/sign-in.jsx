import { View, Text } from "react-native";
import React from "react";
import Welcome from "../components/sections/Welcome/welcome";

const SignIn = () => {
  return (
    <View className='bg-white w-screen h-screen'>
      <Welcome />
    </View>
  );
};

export default SignIn;
