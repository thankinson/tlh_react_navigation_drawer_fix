import { View, Text, StyleSheet, Button } from "react-native";

export default function TestScreen({navigation}){
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button 
        onPress={()=> 
          navigation.navigate('Home')}
          title='Go back home' />
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