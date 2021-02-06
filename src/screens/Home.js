import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../redux/actions/index';
import RestaurantCard from '../Component/RestaurantCard';
import SearchForm from '../Component/SearchForm';

const Home = (props) => {
  useEffect(() => {
    // console.log('INSIDE HOME COMPONENT', props.user);
    props.fetchRestaurants();
  }, []);

  return (
    <SafeAreaView>
      <SearchForm restaurants={props.restaurants} />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={props.restaurants}
        renderItem={({ item }) => (
          <RestaurantCard
            key={item.id}
            item={item}
            navigation={props.navigation}
            user={props.user}
          />
        )}
      />
    </SafeAreaView>
  );
};

const msp = (state) => {
  return {
    restaurants: state.restaurants,
    user: state.user,
  };
};

const mdp = (dispatch) => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants()),
  };
};

export default connect(msp, mdp)(Home);
