import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const CheckEmail = () => {
  const navigation = useNavigation();
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const [counter, setCounter] = useState(300);

  const onChangeText = (index, value) => {
    if (value.length > 0) {
      switch (index) {
        case 0:
          secondTextInputRef.current.focus();
          break;
        case 1:
          thirdTextInputRef.current.focus();
          break;
        case 2:
          fourthTextInputRef.current.focus();
          break;
        default:
          fourthTextInputRef.current.blur();
          break;
      }
    }
  };
  useEffect(() => {
    let interval = null;
    if (counter > 0) {
      interval = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [counter]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };
  return (
    <View className='flex justify-center items-center py-44 bg-white w-screen h-screen'>
      <Text className='font-bold text-3xl text-gray-800'>Check your email</Text>
      <Text className='py-4 text-lg text-gray-400'>
        We've sent the code to your email{" "}
      </Text>
      <View className='flex flex-row space-x-2'>
        <TextInput
          maxLength={1}
          keyboardType='numeric'
          className='border-2 border-gray-300 rounded-xl px-6 py-6 text-xl font-bold'
          onChangeText={(value) => onChangeText(0, value)}
          returnKeyType='next'
          autoFocus={true}
        />
        <TextInput
          ref={secondTextInputRef}
          maxLength={1}
          keyboardType='numeric'
          className='border-2 border-gray-300 rounded-xl px-6 py-6 text-xl font-bold'
          onChangeText={(value) => onChangeText(1, value)}
          returnKeyType='next'
        />
        <TextInput
          ref={thirdTextInputRef}
          maxLength={1}
          keyboardType='numeric'
          className='border-2 border-gray-300 rounded-xl px-6 py-6 text-xl font-bold'
          onChangeText={(value) => onChangeText(2, value)}
          returnKeyType='next'
        />
        <TextInput
          ref={fourthTextInputRef}
          maxLength={1}
          keyboardType='numeric'
          className='border-2 border-gray-300 rounded-xl px-6 py-6 text-xl font-bold'
          onChangeText={(value) => onChangeText(3, value)}
        />
      </View>
      <View className='flex flex-col justify-center items-center space-y-8 w-[86%] pt-10'>
        <Text id='counter' className='py-2'>
          Code expires in:
          <Text className='text-[#FF6464]'> {formatTime(counter)}</Text>
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className='bg-[#1FCC79] rounded-full py-5  w-full '
        >
          <Text className={`text-white text-center font-bold text-sm `}>
            Verify
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-[#ffffff] rounded-full py-5  w-full border-gray-300 border-2 '>
          <View className='flex flex-row justify-center items-center'>
            <Text className={` text-gray-400 text-center font-bold text-sm`}>
              Send again
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckEmail;
