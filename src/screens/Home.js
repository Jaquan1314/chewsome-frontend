import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../redux/actions/index';
import { globalStyles } from '../../globalStyles';
import RestaurantCard from '../Component/RestaurantCard';

const Home = (props) => {
  useEffect(() => {
    console.log('INSIDE HOME COMPONENT');
    props.fetchRestaurants();
  }, []);
  // console.log('OUTSIDE OF USEEFFECT', props.restaurants[0].name);
  // const renderRestaurants = () => {
  //   return props.restaurants.map((restaurant) => (
  //     <RestaurantCard
  //       key={restaurant.id}
  //       restaurantObj={restaurant}
  //       image={restaurant.image}
  //       location={restaurant.location}
  //       name={restaurant.name}
  //       photos={restaurant.photos}
  //       phone={restaurant.phone}
  //       rating={restaurant.rating}
  //       url={restaurant.url}
  //     />
  //   ));
  // };

  return (
    <SafeAreaView style={''}>
      <Text>Home Component</Text>
      <FlatList
        data={props.restaurants}
        renderItem={({ item }) => <RestaurantCard item={item} />}
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
