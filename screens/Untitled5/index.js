import { RadioGroup } from "react-native-radio-buttons-group";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled5 = () => {
  return <View style={_styles.JuXErJFe}>
      <RadioGroup style={_styles.DhkNTUcq} radioButtons={[{
      id: "0",
      value: "0",
      label: "Option 1"
    }, {
      id: "1",
      value: "1",
      label: "Option 2"
    }, {
      id: "2",
      value: "2",
      label: "Option 3"
    }]} layout="column"></RadioGroup><RadioGroup radioButtons={[{
      id: "1",
      label: "Option 1",
      value: "option1"
    }, {
      id: "2",
      label: "Option 2",
      value: "option2"
    }]} layout="column" style={_styles.DYWRaAfY}></RadioGroup></View>;
};

export default Untitled5;

const _styles = StyleSheet.create({
  JuXErJFe: {
    backgroundColor: "#bd3a7f",
    padding: 10,
    position: "absolute",
    height: "100%"
  },
  RGPBoPQO: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 15,
    color: "#777777"
  },
  DhkNTUcq: {
    width: 149,
    height: 180,
    position: "absolute",
    left: 115,
    top: 74
  },
  DYWRaAfY: {
    position: "absolute",
    width: 120,
    height: 70,
    left: 50,
    top: 385
  }
});