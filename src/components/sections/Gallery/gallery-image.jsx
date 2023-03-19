import { View, Image } from "react-native";
import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function GalleryImage() {
  const navigation = useNavigation();
  return (
    <View className='container px-4 pt-10'>
      <View>
        <View className='relative'>
          <Image
            source={{ uri: "https://i.postimg.cc/CxvkXQPV/Ellipse-2.png" }}
            className='w-44 h-44 absolute top-44 -left-14'
          />
          <Image
            source={{
              uri: "https://i.postimg.cc/fR7gdDRf/image-4.png",
            }}
            className='w-64 h-64 absolute top-44 left-20'
          />
          <Image
            source={{
              uri: "https://i.postimg.cc/T2DcPsXc/image-1.png",
            }}
            className='w-36 h-36 absolute top-10 left-10'
          />
          <Image
            source={{
              uri: "https://i.postimg.cc/fTkKcPxp/image-3.png",
            }}
            className='w-44 h-44 absolute top-30 right-0'
          />
          <Image
            source={{
              uri: "https://i.postimg.cc/c4TcGmX0/Ellipse-7.png",
            }}
            className='w-32 h-32 absolute top-40 -right-16'
          />
          <Image
            source={{
              uri: "https://i.postimg.cc/0jFNRhMb/Ellipse-6.png",
            }}
            className='w-28 h-28 absolute top-72 -right-12'
          />
          <Image
            source={{
              uri: "https://i.postimg.cc/kM66wytB/Ellipse-8.png",
            }}
            className='w-36 h-36 absolute top-96 left-44'
          />
          <Image
            source={{
              uri: "https://i.postimg.cc/tRWRYvxt/Ellipse-3.png",
            }}
            className='w-32 h-32 absolute top-96 left-6'
          />
        </View>
      </View>
      <View className='flex flex-col justify-center space-y-4 relative -bottom-[400%] '>
        <Text className=' text-black font-bold text-2xl text-center'>
          Start Cooking
        </Text>
        <Text className=' text-gray-400 text-center font-normal text-sm '>
          Let’s join our community to cook better food!{" "}
        </Text>
        <View className='pt-1'>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            className='bg-[#1FCC79] rounded-full w-full py-4 px-12'
          >
            <Text className='text-white text-center font-bold text-sm '>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
