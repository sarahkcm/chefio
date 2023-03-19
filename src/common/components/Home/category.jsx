import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CategoryData } from "../../constant/category";

const Category = () => {
      const [activeCategory, setActiveCategory] = React.useState(null);
      const handleActiveCategory = (index) => {
        setActiveCategory(index);
      };
  return (
    <View className='flex flex-row justify-start items-start space-x-4 pt-4'>
      {CategoryData.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleActiveCategory(index)}
          className={` ${
            activeCategory === index
              ? `bg-[#1FCC79]`
              : `bg-[#F4F5F7] border-[#F4F5F7] border-2`
          }  rounded-full px-6 py-3`}
        >
          <Text
            className={` ${
              activeCategory === index ? `text-white` : `text-[#9FA5C0]`
            }  font-bold`}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Category;
