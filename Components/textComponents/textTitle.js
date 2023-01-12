import { Text, StyleSheet, View } from "react-native";

export default function TextTitle({children}){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>  
      )
};

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginHorizontal: 24
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
  }
})