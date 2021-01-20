import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../redux/actions/index';
import { globalStyles } from '../../globalStyles';
import RestaurantCard from '../Component/RestaurantCard';
import SearchForm from '../Component/SearchForm';

const Home = (props) => {
  useEffect(() => {
    console.log('INSIDE HOME COMPONENT', props);
    props.fetchRestaurants();
  }, []);

  return (
    <SafeAreaView style={''}>
      <SearchForm />
      <FlatList
        data={props.restaurants}
        renderItem={({ item }) => (
          <RestaurantCard item={item} navigation={props.navigation} />
        )}
      />
      {/* <Text>{renderRestaurants()}</Text> */}
    </SafeAreaView>
  );
};

const msp = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

const mdp = (dispatch) => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants()),
  };
};

export default connect(msp, mdp)(Home);
