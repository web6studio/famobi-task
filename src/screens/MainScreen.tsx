import React from 'react';
import { View, FlatList, StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import useGames from '../hooks/useGames';

export type MainStackParamList = {
  GameScreen: { id: string } | undefined;
};

// TODO: refactoring
const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>Free-To-Play Games</Text>
  </View>
);

const MainScreen = () => {
  const { data, isLoading, isSuccess } = useGames();
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <View style={styles.container}>
      {isLoading && (
        // TODO: Add spinner
        <React.Fragment>
          <Text>Loading...</Text>
        </React.Fragment>
      )}
      {isSuccess && (
        // TODO: Optimization
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigation.navigate('GameScreen', {
                  id: item.id,
                })
              }>
              <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </Pressable>
          )}
          ListHeaderComponent={<Header />}
          stickyHeaderIndices={[0]}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

// TODO: styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272b30',
  },
  header: {
    padding: 5,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
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

export default MainScreen;
