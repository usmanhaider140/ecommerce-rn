import { Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import TweetContent from "./TweetContent";

const Tweet = ({ tweet }) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigate("TweetDetailsScreen", { tweet });
      }}
    >
      <TweetContent tweet={tweet} />
    </Pressable>
  );
};

export default Tweet;
