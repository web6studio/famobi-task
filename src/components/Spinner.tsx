import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from '../styles';

const Spinner = () => (
  <View style={styles.spinner}>
    <ActivityIndicator size="large" color={Colors.heading} />
  </View>
);

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#11151adc',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;
