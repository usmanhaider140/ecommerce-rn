import React from "react";
import { ScrollView, Text, View } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* Category Card */}
      <CategoryCard imgUrl="1" title="Recipe 1" />
      <CategoryCard imgUrl="2" title="Recipe 2" />
      <CategoryCard imgUrl="3" title="Recipe 3" />
      <CategoryCard imgUrl="4" title="Recipe 4" />
      <CategoryCard imgUrl="5" title="Recipe 5" />
      <CategoryCard imgUrl="6" title="Recipe 6" />
      <CategoryCard imgUrl="7" title="Recipe 7" />
    </ScrollView>
  );
};

export default Categories;
