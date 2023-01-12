import { View, StyleSheet } from "react-native";

export default function FlexScreen({children}){
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})