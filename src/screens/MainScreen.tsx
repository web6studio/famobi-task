import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Colors } from '../styles';
import { buildFilterQueryParams } from '../utils';
import { CARD_HEIGHT } from '../constants';
import Header from '../components/Header';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import useGames from '../hooks/useGames';

const MainScreen = () => {
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const [filters, setFilters] = useState({
    platform: 'all',
    sort: 'relevance',
    category: 'all',
  });
  const { data, isLoading, isSuccess } = useGames(
    buildFilterQueryParams(filters),
  );

  const navigate = (id: string, title: string) =>
    navigation.navigate('GameScreen', { id, title });

  const handleFilterChange = (updatedFilters: Filters) => {
    setFilters(updatedFilters);
  };

  const renderItem = useCallback(
    ({ item }: { item: Item }) => (
      <Card item={item} onClick={() => navigate(item.id, item.title)} />
    ),
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <View style={styles.container}>
      <Header filters={filters} onFiltersChange={handleFilterChange} />
      {isSuccess && (
        <FlatList
          data={data}
          renderItem={renderItem}
          style={styles.list}
          keyExtractor={item => item.id}
          // optimization: https://reactnative.dev/docs/optimizing-flatlist-configuration
          maxToRenderPerBatch={20}
          initialNumToRender={20}
          windowSize={41}
          getItemLayout={(_, index) => ({
            length: CARD_HEIGHT,
            offset: CARD_HEIGHT * index,
            index,
          })}
        />
      )}
      {isLoading && <Spinner />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  list: {
    paddingVertical: 5,
  },
});

export default MainScreen;
