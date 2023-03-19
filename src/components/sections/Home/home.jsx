import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import Cards from "../../../common/components/Home/cards";
import Category from "../../../common/components/Home/category";
import { DirectionData } from "../../../common/constant/direction";

const HomeComponent = () => {
  const [activeSection, setActiveSection] = React.useState(null);
  const handleActiveSection = (index) => {
    setActiveSection(index);
  };
  return (
    <ScrollView>
      <View>
        <View className='pt-24 px-10 '>
          <View className=' flex flex-row pl-4 py-4 rounded-full bg-[#F4F5F7] w-full '>
            <Image
              source={{ uri: "https://i.postimg.cc/6p0n3Q15/search.png" }}
              className='w-7 h-7'
            />
            <TextInput
              textContentType='name'
              placeholder='Search'
              className='w-full pl-2 text-gray-500 text-sm appearance-none'
            ></TextInput>
          </View>
          <View className='flex flex-col px-1 py-6'>
            <Text className='text-xl font-bold text-[#3E5481]'>Category</Text>
            <View>
              <Category />
            </View>
          </View>
        </View>
        <View className='bg-[#F4F5F7] w-screen py-1'></View>
        <View className='flex flex-row justify-between '>
          {DirectionData.map((item, index) => {
            return (
              <View
                key={index}
                className={` ${
                  activeSection === index
                    ? ` border-[#1FCC79] border-b-2`
                    : `border-b-2 border-gray-200  `
                }  px-[22%] py-[4%] `}
              >
                <TouchableOpacity
                  onPress={() => handleActiveSection(index)}
                  className={`  `}
                >
                  <Text
                    className={`  ${
                      activeSection === index
                        ? `  text-[#3E5481] font-bold `
                        : `text-gray-400  `
                    }text-lg`}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <View
          className={`  ${
            Platform.OS === "ios" ? `px-8` : `px-6`
          } flex flex-col space-y-4 pt-4`}
        >
          <Cards />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeComponent;
