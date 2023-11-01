import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import List from '../../Components/ExpList.tsx';
import {gStyles} from '../../Utils/GlobalStyles';
import TabButtons from '../../Components/Tab/index.jsx';
import {useDispatch} from 'react-redux';
import {changeLoading} from '../../Redux/Slices/Expences.js';

const HomeScreen = () => {
  // const dispatch = useDispatch();
  // useFocusEffect(() => {

  //   dispatch(changeLoading());
  // });

  return (
    <View style={gStyles.container}>
      <List />
      <TabButtons />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
