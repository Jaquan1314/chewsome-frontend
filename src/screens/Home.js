import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../redux/actions/index';
import RestaurantCard from '../Component/RestaurantCard';
import SearchForm from '../Component/SearchForm';

const Home = (props) => {
  const { restaurants, user, fetchRestaurants, navigation } = props;
  useEffect(() => {
    // console.log('INSIDE HOME COMPONENT', props.user);
    fetchRestaurants();
  }, []);

  const [searchValue, setSearchValue] = useState('');

  const searchHandler = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter((restaurants) => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
    setSearchValue(text);
  };

  const contains = searchValue;

  // const filteredRestaurants = () => {
  //   return restaurants.filter((restaurant) =>
  //     restaurant.name.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  // };

  // console.log('RESTAURANTS', restaurants);
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      {/* <SearchForm searchHandler={searchHandler} searchValue={searchValue} /> */}
      {/* <Text>Restaurants</Text> */}
      <FlatList
        ListHeaderComponent={SearchForm}
        keyExtractor={(item) => item.id.toString()}
        data={restaurants}
        renderItem={({ item }) => (
          <RestaurantCard key={item.id} item={item} navigation={navigation} />
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
