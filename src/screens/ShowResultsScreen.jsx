import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Text, StyleSheet, FlatList, Image } from "react-native";
import Yelp from "../api/yelp";

const ShowResults = ({ navigation }) => {
  const [result, setResult] = useState("");
  const id = navigation.getParam("id");

  const getData = async () => {
    try {
      const { data } = await Yelp.get(`/${id}`);
      setResult(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {result ? (
        <>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginVertical: 30,
              marginLeft: 15,
            }}
          >
            {result.name}
          </Text>
          <Text style={{ marginBottom: 5, marginLeft: 15 }}>
            <Text style={{ fontWeight: "bold" }}>Contact Detail: </Text>
            {result.display_phone}
          </Text>
          <Text style={{ marginBottom: 15, marginLeft: 15 }}>
            <Text style={{ fontWeight: "bold" }}>Location: </Text>
            {result.location.display_address}
          </Text>
          <Text style={{ fontWeight: "bold", marginLeft: 15 }}>
            Extra Photos
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => (
              <Image style={styles.imageStyle} source={{ uri: item }} />
            )}
          />
        </>
      ) : (
        <Text>Processing... </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
    borderRadius: 5,
    margin: 10,
    marginLeft: 15
  },
});

export default ShowResults;
