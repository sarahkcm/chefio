import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PasswordRecovery = () => {
const navigation = useNavigation();
  return (
    <View className='flex justify-center items-center bg-white w-screen h-screen py-44'>
      <Text className='font-bold text-3xl text-gray-800'>
        Password recovery
      </Text>
      <Text className='py-4 text-lg text-gray-400'>
        Enter your email to recover your password{" "}
      </Text>
      <View className='px-10 py-4 flex flex-col justify-center items-center w-full space-y-6'>
        <View className=' flex flex-row pl-4 py-4 rounded-full border-2 border-gray-300 w-full focus:border-[#1FCC79]'>
          <Image
            source={{ uri: "https://i.postimg.cc/ZYWHy3GM/Message.png" }}
            className='w-7 h-7'
          />
          <TextInput
            textContentType='emailAddress'
            placeholder='Your Email'
            className='w-full pl-2 text-gray-500 text-sm appearance-none'
          ></TextInput>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className='bg-[#1FCC79] rounded-full py-5  w-full border-gray-300 border-2 '
        >
          <View className='flex flex-row justify-center items-center'>
            <Text className={` text-white text-center font-bold text-sm`}>
              Sign In
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordRecovery;
