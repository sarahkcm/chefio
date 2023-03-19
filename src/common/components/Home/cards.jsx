import { View, Text, Platform, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { CardData } from '../../constant/card';

const Cards = () => {
     const [activeCard, setActiveCard] = React.useState(null);
     const handleActiveCard = (index) => {
       setActiveCard(index);
     };
  return (
    <View
      className={` ${
        Platform.OS === "ios" ? `pb-36` : `pb-10`
      } flex flex-row flex-wrap justify-between`}
    >
      {CardData.map(({ icon, profile, picture, name, description }, index) => (
        <TouchableOpacity onPress={() => handleActiveCard(index)} key={index}>
          <View className='flex flex-row items-center py-4 space-x-2'>
            <Image source={{ uri: icon }} className='w-10 h-10' />
            <Text>{profile}</Text>
          </View>
          <View>
            <Image
              source={{
                uri:
                  activeCard === index
                    ? `https://i.postimg.cc/GpssRqD5/Heart-liked.png`
                    : "https://i.postimg.cc/rw1JTyL4/Heart.png",
              }}
              className='w-10 h-10 absolute top-[8%] right-[8%] z-10'
            />
            <Image source={{ uri: picture }} className='w-40 h-40' />
          </View>
          <View className='flex flex-col py-4 space-y-2'>
            <Text className='text-lg font-bold text-[#3E5481]'>{name}</Text>
            <Text className='text-sm text-gray-400'>{description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Cards