import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultDetail = ({ data }) => {
  return (
    <View style={styles.mainView}>
      <Image style={styles.imageStyle} source={{ uri: data.image_url }} />
      <Text style={styles.textStyle}>{data.name}</Text>
      <Text>{data.rating} stars, {data.review_count} reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    margin: 15,
  },
  imageStyle: {
    width: 250,
    height: 150,
    borderRadius: 5,
    marginBottom: 5
  },
  textStyle: {
    fontWeight: "bold",
  },
});

export default ResultDetail;
