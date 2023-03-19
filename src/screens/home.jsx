import React from "react";
import { View, Platform } from "react-native";
import NavBar from "../common/layout/nav-bar";
import HomeComponent from "../components/sections/Home/home";

const Home = () => {
  return (
    <>
      <View className='bg-white w-screen h-screen'>
        <HomeComponent />
      </View>
      <View
        className={` ${
          Platform.OS === "ios" ? ` bottom-24` : ` bottom-5`
        } fixed bg-white w-screen`}
      >
        <NavBar />
      </View>
    </>
  );
};

export default Home;
