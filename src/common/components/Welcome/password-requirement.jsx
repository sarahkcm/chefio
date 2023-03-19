import { View, Text, Image } from 'react-native'
import React from 'react'

const PasswordRequirement = ({hasMinChars, hasNumber}) => {
  return (
    <View className='flex flex-col justify-start items-start pl-4 pt-10'>
      <Text className='text-xl pl-4 text-gray-900 font-medium'>
        Your Password must contain:
      </Text>
      <View className='flex flex-row pl-4 pt-4 justify-center items-center space-x-2'>
        {hasMinChars ? (
          <Image
            source={{
              uri: "https://i.postimg.cc/5tzkhrJL/Check-Circle.png",
            }}
            className='w-7 h-7'
          />
        ) : (
          <Image
            source={{
              uri: "https://i.postimg.cc/SQHYstbJ/Group-28.png",
            }}
            className='w-7 h-7'
          />
        )}
        <Text>Atleast 6 characters</Text>
      </View>
      <View className='flex flex-row pl-4 pt-4 justify-center items-center space-x-2'>
        {hasNumber ? (
          <Image
            source={{
              uri: "https://i.postimg.cc/5tzkhrJL/Check-Circle.png",
            }}
            className='w-7 h-7'
          />
        ) : (
          <Image
            source={{
              uri: "https://i.postimg.cc/SQHYstbJ/Group-28.png",
            }}
            className='w-7 h-7'
          />
        )}
        <Text>Contains a number</Text>
      </View>
    </View>
  );
}

export default PasswordRequirement