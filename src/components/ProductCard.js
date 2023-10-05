import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(1);
  const { colorScheme } = useColorScheme();
  return (
    <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5">
      <View className="bg-white rounded-xl">
        <Image
          source={{ uri: product?.image }}
          className="w-full h-72"
          style={{
            resizeMode: "contain",
          }}
        />
      </View>
      <View className="mt-5">
        <Text className="dark:text-white/70 text-sm capitalize">
          {product?.category}
        </Text>
        <Text className="dark:text-white text-lg font-semibold ">
          {product?.title}
        </Text>
        <View className="flex-row justify-between my-3">
          <View className="flex-row gap-3 items-center">
            <AntDesign
              name="minuscircleo"
              color={colorScheme === "light" ? "black" : "white"}
              size={24}
              onPress={() => setCount(count - 1)}
            />
            <Text className="text-xl dark:text-white">{count}</Text>
            <AntDesign
              name="pluscircleo"
              color={colorScheme === "light" ? "black" : "white"}
              size={24}
              onPress={() => setCount(count + 1)}
            />
          </View>
          <Text className="dark:text-white  text-2xl font-extrabold">
            ${count * product?.price}
          </Text>
        </View>
        <Text numberOfLines={2} className="dark:text-white/70 text-sm ">
          {product?.description}
        </Text>
        <TouchableOpacity className="bg-black rounded-full justify-center dark:bg-white p-3 mt-5 flex-row space-x-3 items-center">
          <AntDesign
            name="shoppingcart"
            color={colorScheme === "light" ? "white" : "black"}
            size={24}
          />
          <Text className="text-white dark:text-black font-bold">
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
