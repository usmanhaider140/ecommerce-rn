import * as React from "react";
import { FlatList, Text } from "react-native";
import products from "../screens/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      style={{
        paddingHorizontal: 15,
      }}
      renderItem={({ item }) => {
        return <ProductCard product={item} />;
      }}
    />
  );
}
