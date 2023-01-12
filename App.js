import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./Screens/HomeScreen";
import TestScreen from "./Screens/TestScreen";

export default function App() {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="TestScreen" component={TestScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
