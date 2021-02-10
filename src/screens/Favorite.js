import React, { useEffect } from 'react';
import FavoriteCard from '../Component/FavoriteCard';
import { StyleSheet, ScrollView, View } from 'react-native';
import { getFavorites } from '../redux/actions/index';
import { connect } from 'react-redux';

const Favorite = (props) => {
  const { getFavorites, user, favorites } = props;
  console.log('INSIDE FAVORITE SCREEN', props);

  useEffect(() => {
    getFavorites(user.id);
  }, []);

  const allFavorites = favorites.map((favorite) => (
    <FavoriteCard key={favorite.id} favoriteObj={favorite} />
  ));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewCont}>{allFavorites}</View>
    </ScrollView>
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
  scrollContainer: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  viewCont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
