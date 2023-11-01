import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {gStyles} from '../../Utils/GlobalStyles';
import {getDay, getMonth} from '../../Utils/functions';
import {useDispatch} from 'react-redux';
import {addExpenses} from '../../Redux/Slices/Expences';

const AddExp = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const addExpensesToList = () => {
    console.log('====================================');
    console.log('Add to expense function called');
    console.log('====================================');

    if (!title || !amount) {
      console.log('====================================');
      console.log('Empty field condition');
      console.log('====================================');
      Alert.alert('Both fields are necessary !!');
      return;
    } else {
      const d = new Date();
      const curMonth = d.getMonth() + 1;
      const year = d.getFullYear();
      const day = d.getDay();
      const date = d.getDate();
      const month = getMonth(curMonth);
      const dayStr = getDay(day);

      const checkAmount = () => {
        for (let i = 0; i < amount.length; i++) {
          if (isNaN(Number(amount[i]))) {
            console.log('Check Amount false condition');
            return false;
          }
        }
        return true;
      };

      const result = checkAmount();

      if (!result) {
        console.log('Check Amount if condition ');
        Alert.alert('Amount must be Number !!');
        return;
      }

      const formatAmount = Number(amount);

      const expenseToAdd = {
        month: 'Nov',
        date,
        day: dayStr,
        year,
        title,
        amount: formatAmount,
      };

      console.log('firnal expense onject -->  ', expenseToAdd);

      dispatch(addExpenses(expenseToAdd));

      setAmount('');
      setTitle('');
    }
  };

  return (
    <View style={gStyles.containerAlignCenter}>
      <Text style={styles.heading}>Add your Expense here.</Text>

      <View style={[gStyles.rowContainerCenterBetween, {marginVertical: 30}]}>
        <TextInput
          placeholder="Title"
          placeholderTextColor={'black'}
          style={[gStyles.input, {width: '55%'}]}
          onChangeText={e => setTitle(e)}
          value={title}
        />
        <TextInput
          placeholder="Amount"
          placeholderTextColor={'black'}
          style={[gStyles.input, styles.amount]}
          onChangeText={e => setAmount(e)}
          value={amount}
        />
      </View>
      <TouchableOpacity
        onPress={addExpensesToList}
        style={[gStyles.button, styles.button]}>
        <Text style={[gStyles.textBlackWhite, {fontSize: 20}]}>
          Add Expense
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddExp;

const styles = StyleSheet.create({
  heading: {
    marginVertical: 20,
    fontSize: 22,
    fontWeight: '700',
  },
  amount: {width: '35%', marginLeft: 20},
  button: {backgroundColor: '#2471A3'},
});
