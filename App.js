import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import ProductList from "./src/components/ProductList";
export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaView className="items-center justify-center flex-1 pt-6 bg-gray-200 dark:bg-black">
      <View className="flex-row items-center w-full gap-5 mb-3">
        <Text className="text-2xl font-bold dark:text-white">
          New Collection
        </Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>
      <ProductList />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
}
