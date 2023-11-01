import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import List from '../../Components/ExpList.tsx';
import {gStyles} from '../../Utils/GlobalStyles';
import TabButtons from '../../Components/Tab/index.jsx';

const HomeScreen = () => {
  return (
    <View style={gStyles.container}>
      <List />
      <TabButtons />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
