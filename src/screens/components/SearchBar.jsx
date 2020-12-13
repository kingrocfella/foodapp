import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ handleTextInput, searchTerm, handleSubmit }) => {
  return (
    <View style={styles.mainWrapper}>
      <Feather
        style={styles.searchStyle}
        name="search"
        size={35}
        color="black"
      />
      <TextInput
        value={searchTerm}
        style={styles.inputStyle}
        placeholder="Search..."
        onChangeText={handleTextInput}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    margin: 10,
    fontSize: 18,
  },
  searchStyle: {
    alignSelf: "center",
    marginLeft: 10,
  },
});

export default SearchBar;
