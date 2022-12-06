import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled14 = ({
  navigation
}) => {
  return <View style={styles.container}>
      
      
      
    <Pressable onPress={() => navigation.navigate("Untitled11")}><View style={styles.jvqCiEms}></View></Pressable><Pressable onPress={{}}><Text style={styles.nfbJwrLN}>Lorem ipsum…</Text></Pressable></View>;
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
    backgroundColor: "#f0f0f1"
  },
  row1: {},
  row2: {},
  row3: {},
  jvqCiEms: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  nfbJwrLN: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled14;