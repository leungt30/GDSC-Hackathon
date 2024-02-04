import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";

const GridElement = ({ onPress, thumbnail, caption }) => {
  return (
    <TouchableOpacity style={styles.element} onPress={onPress}>
      <Image source={{ uri: "data:image/png;base64," + thumbnail} } style={styles.thumbnail} />
      <Text style={styles.caption}>{caption}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  element: {
    width: 180,
    height: 180,
    borderRadius: 10,
    backgroundColor: "#39e75f",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 13
  },
  caption: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  thumbnail: {
    width: 140,
    height: 140,
  },
});

export default GridElement;
