import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Images from "../utils/assets";
import { getRandom } from "../utils/getRandom";
import { StarIcon, MapPinIcon } from "react-native-heroicons/outline";
import Colors from "../utils/colors";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="mr-3 bg-white shadow">
      <Image
        source={Images.recipes[getRandom(1, 7)]}
        className="w-64 rounded-sm h-36"
      />
      <View className="px-3 pb-4">
        <Text className="pt-2 text-lg font-bold">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color={Colors.primary} opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> - {genre}
          </Text>
        </View>
        <View className="flex-row space-x-1">
          <MapPinIcon color={"gray"} opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
