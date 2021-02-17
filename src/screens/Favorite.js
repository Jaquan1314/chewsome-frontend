import React, { useEffect } from 'react';
import FavoriteCard from '../Component/FavoriteCard';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
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
    <>
      {favorites.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
            }}
          >
            Your fav restaurants will appear here !
          </Text>
        </View>
      ) : (
        <ScrollView style={{ backgroundColor: '#fff' }}>
          <View style={styles.container}>{allFavorites}</View>
        </ScrollView>
      )}
    </>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
