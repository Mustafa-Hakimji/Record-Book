import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {gStyles} from '../../Utils/GlobalStyles';
import {getMonth} from '../../Utils/functions';

const List = () => {
  const dispatch = useDispatch();
  const expenses = useSelector(state => state?.expenses?.data);

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState(2023);
  const [data, setData] = useState();

  const handleSelections = (data: any) => {
    setSelectedMonth(data?.month);
    setSelectedYear(data?.year);
  };

  const chnageData = () => {
    const date = new Date();
    const curMonth = date.getMonth() + 1;
    const curYear = date.getFullYear();
    const month = getMonth(curMonth);

    if (!selectedMonth) {
      setSelectedMonth(month);
      setSelectedYear(curYear);
    }

    const filteredData = expenses.filter((item: any) => {
      if (item.month === selectedMonth && item.year === selectedYear) {
        return item.expenses;
      }
    });
    setData(filteredData[0]?.expenses);
  };

  useEffect(() => {
    chnageData();
  }, [selectedMonth, selectedYear]);

  return (
    <View>
      <FlatList
        extraData={expenses?.length}
        data={expenses}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={[
                gStyles.rowContainerSpaceBetween,
                styles.months,
                {
                  backgroundColor:
                    item.month === selectedMonth ? 'black' : 'white',
                },
              ]}
              onPress={() => {
                handleSelections(item);
              }}>
              <Text
                style={[
                  styles.text,
                  {
                    color: selectedMonth === item.month ? 'white' : 'black',
                  },
                ]}>
                {item.month}
              </Text>
              <Text
                style={[
                  styles.text,
                  {color: selectedMonth === item.month ? 'white' : 'black'},
                ]}>
                {item.year}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      <View
        style={{
          borderBottomColor: 'black',
          borderWidth: 0.5,
          width: '80%',
          marginVertical: 10,
          alignSelf: 'center',
        }}
      />
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                padding: 15,
                margin: 10,
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 0.8,
              }}>
              <Text style={gStyles.textBlack}>{item.title}</Text>
              <Text style={gStyles.textBlack}>{item.amount}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  months: {
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#0DFFE5',
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  text: {
    marginHorizontal: 5,
    fontSize: 15,
    fontWeight: '700',
    color: 'black',
  },
});
