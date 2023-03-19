import { View, Text, Image } from "react-native";
import React from "react";
import { NavBarData } from "../constant/nav-bar";
import { TouchableOpacity } from "react-native";

const NavBar = () => {
  const [activeNavData, setActiveNavData] = React.useState(null);
  const handleActiveNavData = (index) => {
    setActiveNavData(index);
  };
  return (
    <View className='flex flex-col bg-white w-screen h-1/2 '>
      <View className='flex flex-row justify-between px-4'>
        {NavBarData.map(({ title, iconDeactivate, iconActivate }, index) =>
          title === "Scan" ? (
            <View
              key={index}
              className={`
                relative -top-5 left-[8%]
                flex justify-center items-center`}
            >
              <View className='bg-[#1FCC79] rounded-full py-4 px-4'>
                <Image
                  source={{
                    uri: iconActivate,
                  }}
                  className='w-6 h-6 '
                />
              </View>
              <Text className='text-[#9FA5C0]'>{title}</Text>
            </View>
          ) : (
            <View
              key={index}
              className={`
                flex flex-col  justify-center items-center`}
            >
              <TouchableOpacity
                onPress={() => handleActiveNavData(index)}
                className={`
                flex flex-col space-y-3 justify-center items-center `}
              >
                <Image
                  source={{
                    uri:
                      activeNavData === index ? iconActivate : iconDeactivate,
                  }}
                  className='w-5 h-5'
                />
                <Text
                  className={` ${
                    activeNavData === index
                      ? `text-[#1FCC79]`
                      : `text-[#9FA5C0]`
                  } text-xs`}
                >
                  {title}
                </Text>
              </TouchableOpacity>
            </View>
          )
        )}
      </View>
    </View>
  );
};

export default NavBar;
