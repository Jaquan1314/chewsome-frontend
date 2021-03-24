import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const SearchForm = (props) => {
  // console.log('SEARCH PROPS', props);
  const { searchHandler, searchValue } = props;

  return (
    <View>
      {/* add icon to search bar when possible */}
      <TextInput
        style={styles.input}
        placeholder="Search for a Restaurant"
        value={searchValue}
        onChangeText={(text) => searchHandler(text)}
      />
    </View>
  );
};

export default SearchForm;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 30,
    marginBottom: 12,
    marginTop: 12,
    marginLeft: 42,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
