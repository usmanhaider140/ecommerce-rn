import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import Images from "../utils/assets";
const CategoryCard = ({ title, imgUrl }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={Images.recipes[imgUrl]}
        className="w-20 h-20 rounded bg-black/10"
      />
      <Text className="absolute text-white bottom-1 left-1">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
