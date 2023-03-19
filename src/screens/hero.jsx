import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import GalleryImageStyle from "../components/sections/Gallery/gallery-image-style";
import GalleryImage from "../components/sections/Gallery/gallery-image";

export default function Hero() {
  return (
    <View className=' flex flex-col justify-center items-center container'>
      <GalleryImage />
      {/* <GalleryImageStyle /> */}
    </View>
  );
}
