import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {gStyles} from '../../Utils/GlobalStyles';
import {useNavigation} from '@react-navigation/native';

const TabButtons = () => {
  const navigation = useNavigation();
  return (
    <View style={[gStyles.rowContainerCenterBetween, styles.tabs]}>
      <TouchableOpacity onPress={() => navigation.navigate('Add')}>
        <Image
          style={{height: 100, width: 100}}
          source={require('../../Assets/Images/add.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TabButtons;

const styles = StyleSheet.create({
  tabs: {position: 'absolute', bottom: 10, right: 10, opacity: 0.5},
});
