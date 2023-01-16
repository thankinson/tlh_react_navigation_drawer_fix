import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'
// Ui components
import FlexScreen from "./Components/Ui/FlexScreen";

// navigation
import HomeScreen from "./Screens/HomeScreen";
import UserScreen from "./Screens/UserScreen";

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <FlexScreen>
      <NavigationContainer>
        <Drawer.Navigator 
        initialRouteName="Home"
          screenOptions={{
            headerStyle: {backgroundColor: '#3c0a6b'},
            headerTintColor: 'white',
            drawerActiveBackgroundColor: '#f0e1ff',
            drawerActiveTintColor: '3c0a6b',
            // drawerStyle: { backgroundColor: '#ccc' }
          }}>
          <Drawer.Screen name="Home" component={HomeScreen} options={{
            drawerLabel: 'Welcome Screen',
            drawerIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} />
          }}/>
          <Drawer.Screen name="User" component={UserScreen} 
            options={{
              drawerIcon: ({color, size}) => <Ionicons name='person' color={color} size={size} />
            }} 
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </FlexScreen>
  );
}
