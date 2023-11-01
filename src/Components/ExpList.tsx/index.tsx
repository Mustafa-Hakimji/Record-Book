import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {gStyles} from '../../Utils/GlobalStyles';
import {getMonth} from '../../Utils/functions';
import {useRoute} from '@react-navigation/native';

const List = () => {
  const dispatch = useDispatch();
  const expenses = useSelector(state => state?.expenses?.data);

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState(2023);

  const handleSelections = (data: any) => {
    setSelectedMonth(data?.month);
    setSelectedYear(data?.year);
  };

  const chnageData = () => {
    const date = new Date();
    const curMonth = date.getMonth() + 1;
    const curYear = date.getFullYear();
    const month = getMonth(curMonth);

    setSelectedMonth(month);
    setSelectedYear(curYear);
  };

  useEffect(() => {
    chnageData();
  }, []);

  let listData = [];
  const filteredData = expenses.filter((item: any, index: any) => {
    if (item.month === selectedMonth && item.year === selectedYear) {
      return item;
    }
  });

  if (filteredData && filteredData.length > 0 && filteredData[0].expenses) {
    listData = filteredData[0].expenses;
  }

  const totalAmount = listData.reduce(
    (acc: number, item: any) => acc + item.amount,
    0,
  );

  return (
    <>
      {expenses.length > 0 ? (
        <View style={{flex: 1}}>
          <FlatList
            style={{maxHeight: 50}}
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
                    {item.month} {item.year}
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
            style={{flex: 1}}
            data={listData}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={styles.expContainer}>
                  <View>
                    <Text style={gStyles.textBlack}>
                      {item.month}{' '}
                      {item.date < 10 ? `0${item.date}` : item.date} {item.day}{' '}
                      {item.year}
                    </Text>
                    <TouchableOpacity
                      style={[gStyles.button, styles.deleteButton]}>
                      <Text style={gStyles.textBlackWhite}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.itemContainer}>
                    <Text style={[gStyles.textBlack, styles.items]}>
                      {item.title}
                    </Text>
                    <Text style={[gStyles.textBlack, styles.items]}>
                      {item.amount} R.s.
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <Text style={[gStyles.textBlack]}>
            Total expenses:- {totalAmount} R.s.
          </Text>
        </View>
      ) : (
        <View style={gStyles.containerCenter}>
          <Text style={gStyles.textBlack}>No Expenses yet</Text>
        </View>
      )}
    </>
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
  expContainer: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemContainer: {
    justifyContent: 'flex-end',
  },
  items: {
    marginBottom: 10,
    textAlign: 'right',
    letterSpacing: 2,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    width: '60%',
    borderWidth: 0,
  },
});
