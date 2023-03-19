import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Inputs = ({passwordVisible, togglePasswordVisibility, handlePasswordChange, setShowPasswordRequirements}) => {
  return (
    <View className='flex-col flex space-y-4'>
      <View className='flex flex-row px-8 space-x-4 pt-10'>
        <View className=' flex flex-row pl-4 py-4 rounded-full border-2 border-gray-300 w-full focus:border-[#1FCC79]'>
          <Image
            source={{ uri: "https://i.postimg.cc/ZYWHy3GM/Message.png" }}
            className='w-7 h-7'
          />
          <TextInput
            textContentType='emailAddress'
            placeholder='Email or phone number'
            className='w-full pl-2 text-gray-500 text-sm appearance-none'
          ></TextInput>
        </View>
      </View>
      <View className='flex flex-row px-8 justify-between '>
        <View className=' flex flex-row pl-4 py-4 rounded-full border-2 border-gray-300 w-full focus:border-[#1FCC79]'>
          <Image
            source={{ uri: "https://i.postimg.cc/3x8nN6Yg/Lock.png" }}
            className='w-7 h-7'
          />
          <TextInput
            textContentType='password'
            secureTextEntry={!passwordVisible}
            placeholder='Password'
            onFocus={() => setShowPasswordRequirements(true)}
            onBlur={() => setShowPasswordRequirements(true)}
            onEndEditing={() => setShowPasswordRequirements(false)}
            onChangeText={handlePasswordChange}
            className='w-full pl-2 text-gray-500 text-sm appearance-none'
          ></TextInput>
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={{ uri: "https://i.postimg.cc/bN8RVMGK/Show.png" }}
              className='w-7 h-7 relative right-20'
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Inputs