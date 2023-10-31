import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import List from '../../Components/ExpList.tsx';
import {gStyles} from '../../Utils/GlobalStyles';

const HomeScreen = () => {
  return (
    <View style={gStyles.container}>
      <List />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
