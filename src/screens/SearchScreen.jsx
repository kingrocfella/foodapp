import React from "react";
import { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "./components/SearchBar";
import useSearchResults from "../hooks/useSearchResults";
import ResultList from "./components/ResultList";

const SearchScreen = () => {
  const [searchTerm, handleTextInput] = useState("");
  const [error, response, handleSubmit] = useSearchResults();

  const FilterResults = (arg) => response.filter((item) => item.price === arg);

  return (
    <>
      <SearchBar
        handleSubmit={() => handleSubmit(searchTerm)}
        searchTerm={searchTerm}
        handleTextInput={handleTextInput}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <ResultList data={FilterResults("$")} title="Cost Effective" />
        <ResultList data={FilterResults("$$")} title="Bit Pricier" />
        <ResultList data={FilterResults("$$$")} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
