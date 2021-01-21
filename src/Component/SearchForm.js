import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { search } from '../redux/actions/index';
import { connect } from 'react-redux';

const SearchForm = (props) => {
  // console.log('SEARCH PROPS', props);
  const { search, value, restaurants } = props;

  return (
    <View>
      {/* add icon to search bar when possible */}
      <TextInput
        style={styles.input}
        placeholder="Search for a Restaurant"
        value={value.value}
        onChange={(e) => {
          search(e.target.value);
        }}
      />
    </View>
  );
};

const msp = (state) => {
  return {
    value: state.value,
  };
};

const mdp = (dispatch) => {
  return {
    search: (value) => dispatch(search(value)),
  };
};

export default connect(msp, mdp)(SearchForm);

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
