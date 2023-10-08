import { View, Text, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import TweetContent from "../../components/TweetContent";

const TweetDetailsScreen = () => {
  const router = useRoute();
  const navigate = useNavigation();
  const { params } = router;
  useLayoutEffect(() => {
    navigate.setOptions({
      headerTitle: params.tweet.author.name,
    });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button
        title="Go Back"
        onPress={() => {
          navigate.goBack();
        }}
      />
      <TweetContent tweet={params.tweet} />
    </SafeAreaView>
  );
};

export default TweetDetailsScreen;
