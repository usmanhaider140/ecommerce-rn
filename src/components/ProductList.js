import * as React from "react";
import { FlatList } from "react-native";
import products from "../utils/products";
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
