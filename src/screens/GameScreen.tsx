import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
// import useGame from '../hooks/useGame';

const GameScreen = () => {
  const route = useRoute();
  // const { data, isLoading, isSuccess } = useGame(route.params?.id);
  // TODO: add typings
  console.log(route.params);

  return (
    <View style={styles.container}>
      <Text style={styles.container}>Loading...</Text>
      {/* {isLoading && (
        <React.Fragment>
          <Text>Loading...</Text>
        </React.Fragment>
      )}
      {isSuccess && (
        <View style={styles.item}>
          <Text style={styles.title}>{data.title}</Text>
        </View>
      )} */}
    </View>
  );
};

// TODO: styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#FFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    color: '#000',
    fontSize: 32,
  },
});

export default GameScreen;
