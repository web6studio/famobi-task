import React, { FunctionComponent } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Image from 'react-native-fast-image';
import { CARD_HEIGHT } from '../constants';
import { Colors, Fonts } from '../styles';

type Props = {
  onClick: () => void;
  item: Item;
};

const Card: FunctionComponent<Props> = ({ onClick, item }) => (
  <Pressable onPress={onClick}>
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{ uri: item.thumbnail }}
        resizeMode={Image.resizeMode.cover}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.info}>
          <Text style={styles.text}>{item.platform}</Text>
          <Text style={styles.text}>{item.genre}</Text>
        </View>
      </View>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#32383e',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 4,
    overflow: 'hidden',
    shadowColor: '#000000',
    elevation: 2,
    height: CARD_HEIGHT, // fixed for rendering speed
  },
  container: {
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
    paddingBottom: 12,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: Fonts.text,
});

export default Card;
