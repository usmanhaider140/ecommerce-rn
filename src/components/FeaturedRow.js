import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import Colors from "../utils/colors";

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between px-4 mt-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon color={Colors.primary} opacity={0.5} />
      </View>
      <Text className="px-4 text-xs text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        <RestaurantCard
          title={"Restaurant 1"}
          id="123"
          address={"Main Street, 123"}
          rating={4.8}
          dishes={[]}
          imageUrl="https://random.imagecdn.app/500/150"
          genre={"Japanese"}
          long={20}
          lat={33}
        />
        <RestaurantCard
          title={"Restaurant 1"}
          id="123"
          address={"Main Street, 123"}
          rating={4.8}
          dishes={[]}
          imageUrl="https://random.imagecdn.app/500/150"
          genre={"Japanese"}
          long={20}
          lat={33}
        />
        <RestaurantCard
          title={"Restaurant 1"}
          id="123"
          address={"Main Street, 123"}
          rating={4.8}
          dishes={[]}
          imageUrl="https://random.imagecdn.app/500/150"
          genre={"Japanese"}
          long={20}
          lat={33}
        />
        <RestaurantCard
          title={"Restaurant 1"}
          id="123"
          address={"Main Street, 123"}
          rating={4.8}
          dishes={[]}
          imageUrl="https://random.imagecdn.app/500/150"
          genre={"Japanese"}
          long={20}
          lat={33}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
