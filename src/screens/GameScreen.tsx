import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import Image from 'react-native-fast-image';
import { Colors, Fonts } from '../styles';
import useGame from '../hooks/useGame';
import Spinner from '../components/Spinner';

const GameScreen = () => {
  const route = useRoute<RouteProp<NavigationParams, 'GameScreen'>>();
  const { data, isLoading, isSuccess } = useGame(route.params.id);

  return (
    <ScrollView style={styles.container}>
      {isSuccess && (
        <View style={styles.wrapper}>
          <Image
            style={styles.image}
            source={{ uri: data.thumbnail }}
            resizeMode={Image.resizeMode.cover}
          />
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.info}>Platform: {data.platform}</Text>
          <Text style={styles.info}>Genre/Tag: {data.genre}</Text>
          <Text style={styles.text}>{data.description}</Text>
        </View>
      )}
      {isLoading && <Spinner />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  wrapper: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 206,
  },
  title: {
    color: Colors.heading,
    fontSize: 20,
    fontWeight: '500',
    paddingVertical: 12,
  },
  info: {
    color: Colors.heading,
    fontSize: 15,
    paddingBottom: 12,
  },
  text: Fonts.text,
});

export default GameScreen;
