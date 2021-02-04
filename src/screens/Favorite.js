import React, { useEffect } from 'react';
import FavoriteCard from '../Component/FavoriteCard';
import { StyleSheet, View, Text } from 'react-native';
import { getFavorites } from '../redux/actions/index';
import { connect } from 'react-redux';

const Favorite = (props) => {
  const { getFavorites, user, favorites } = props;
  console.log('INSIDE FAVORITE SCREEN', props);
  const userFavs = user.favorites;

  useEffect(() => {
    getFavorites(user.id);
  }, [userFavs]);

  const allFavorites = favorites.map((favorite) => (
    <FavoriteCard {...favorite} />
  ));

  return (
    <View style={styles.container}>
      {/* <Text>Favorite Component</Text> */}
      <Text>{allFavorites}</Text>
    </View>
  );
};

const msp = (state) => {
  return {
    favorites: state.favorites,
    user: state.user,
  };
};

const mdp = (dispatch) => {
  return {
    getFavorites: (userId) => dispatch(getFavorites(userId)),
  };
};

export default connect(msp, mdp)(Favorite);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});