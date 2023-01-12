import { View, Text, StyleSheet, Button } from "react-native";

export default function HomeScreen({navigation}){
  return (
    <View>
      <Text>Home Screen</Text>
      <Button 
        onPress={()=> 
          navigation.navigate('TestScreen')}
          title='Go to Test Screen' />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})