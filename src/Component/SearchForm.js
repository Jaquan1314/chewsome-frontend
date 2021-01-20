import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const SearchForm = () => {
  return (
    <View>
      {/* add icon to search bar when possible */}
      <TextInput style={styles.input} placeholder="Search for a Restaurant" />
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
