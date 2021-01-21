import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
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

  // const filteredRestaurants;

  {
    /**  filter = () => {
    return this.state.restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(this.state.value.toLowerCase())) 
  }
*/
  }

  return (
    <SafeAreaView>
      <SearchForm restaurants={props.restaurants} />
      <FlatList
        // horizontal
        // style={styles.container}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'center',
  },
});
