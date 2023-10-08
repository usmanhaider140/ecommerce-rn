import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/tabScreens/Feed";
import Settings from "../screens/tabScreens/Settings";
import Notification from "../screens/tabScreens/Notifications";
import IonIcons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TweetDetailsScreen from "../screens/homeScreens/TweetDetailsScreen";
import Payments from "../screens/DrawerScreens/Payments";

// TITLE: Stack Navigation
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TabGroup"
        component={TabGroup}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="TweetDetailsScreen"
        component={TweetDetailsScreen}
        options={{
          presentation: "modal",
        }}
      />
    </HomeStack.Navigator>
  );
}

// Bottom Tab Navigation
const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Notification") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else {
            iconName = focused ? "settings" : "ios-settings-sharp";
          }

          return <IonIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          title: "@usmanhaider461",
        }}
      />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Setting" component={Settings} />
    </Tab.Navigator>
  );
}

// Drawer Navigation

// function DrawerGroup() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Payments" component={Payments} />
//       <Drawer.Screen name="HomeStack" component={HomeStackGroup} />
//     </Drawer.Navigator>
//   );
// }

export default function Navigation() {
  return (
    <NavigationContainer>
      <HomeStackGroup />
    </NavigationContainer>
  );
}
