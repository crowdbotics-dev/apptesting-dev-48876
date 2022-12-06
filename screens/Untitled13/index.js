import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled13 = () => {
  return <View style={styles.container}>
      <View style={styles.row1}></View>
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
  }
});
export default Untitled13;