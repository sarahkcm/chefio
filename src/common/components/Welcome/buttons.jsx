import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Buttons = ({navigation}) => {
  return (
    <View>
      <View className='flex flex-col justify-center items-center w-[86%] pt-10'>
        <TouchableOpacity
          onPress={() => navigation.navigate("CheckEmail")}
          className='bg-[#1FCC79] rounded-full py-5 px-36 w-full '
        >
          <Text className={`text-white text-center font-bold text-sm `}>
            Login
          </Text>
        </TouchableOpacity>
        <Text className='py-8'>Or continue with</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
          className='bg-[#FF5842] rounded-full py-4 px-36 w-full '
        >
          <View className='flex flex-row justify-center items-center'>
            <Image
              source={{
                uri: "https://i.postimg.cc/vTcyC67c/Google.png",
              }}
              className='w-7 h-7 '
            />
            <Text className={`text-white text-center font-bold text-sm`}>
              {" "}
              Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className='flex flex-row justify-center items-center py-8'>
        <Text>Don't have any account? </Text>
        <Text className='font-bold text-[#1FCC79] '>Sign Up</Text>
      </View>
    </View>
  );
}

export default Buttons