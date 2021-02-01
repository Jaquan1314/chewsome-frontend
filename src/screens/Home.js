import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../redux/actions/index';
import { globalStyles } from '../../globalStyles';
import RestaurantCard from '../Component/RestaurantCard';
import SearchForm from '../Component/SearchForm';

const Home = (props) => {
  useEffect(() => {
    // console.log('INSIDE HOME COMPONENT', props.user);
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
      {/* <Text>{renderRestaurants()}</Text> */}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'center',
  },
});
