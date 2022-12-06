import { Text } from "react-native";
import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled13 = () => {
  return <View style={styles.container}>
      <Pressable onPress={{}}><View style={styles.row1}><Pressable onPress={{}}><View style={styles.DzpRzkeg}></View></Pressable><Text style={styles.FrQJRbIh}>Lorem ipsum…</Text><View style={styles.vtLghVDk}></View></View></Pressable>
      <View style={styles.row2}></View>
      <View style={styles.row3}></View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    padding: 10,
    backgroundColor: '#f0f0f1'
  },
  row1: {
    flex: 1
  },
  row2: {
    flex: 1
  },
  row3: {
    flex: 1
  },
  DzpRzkeg: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  FrQJRbIh: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    color: "#B00808"
  },
  vtLghVDk: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled13;