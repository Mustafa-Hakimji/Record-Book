import {createSlice} from '@reduxjs/toolkit';

const ExpenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    data: [
      {month: 'Sep', year: 2023, expenses: [{title: 'DMART', amount: 1500}]},
      {
        month: 'Oct',
        year: 2023,
        expenses: [{title: 'Vishal Mart', amount: 1500}],
      },
      {month: 'Nov', year: 2023, expenses: [{title: 'Fruits', amount: 1500}]},
      {
        month: 'Dec',
        year: 2023,
        expenses: [{title: 'Vegetables', amount: 2000}],
      },
      {month: 'Jan', year: 2023, expenses: [{title: 'Snacks', amount: 200}]},
      {month: 'Frb', year: 2023, expenses: [{title: 'Dinner', amount: 800}]},
      {month: 'Mar', year: 2023, expenses: [{title: 'Lunch', amount: 450}]},
    ],
    loading: false,
  },
  reducers: {
    addExpenses(state, action) {
      const {month, year, expense} = action.payload;
      state.data.filter(item => {
        if (item.month === month && item.year === year) {
          item.expenses.push(expense);
        }
      });
    },

    deleteExpenses(state, action) {
      const {month, year, index} = action.payload;
      state.data.filter(item => {
        if (item.month === month && item.year === year) {
          item.expenses.splice(index, 1);
        }
      });
    },

    addNewMonth(state, action) {
      const {month, year, newMonth} = action.payload;
      for (let i = 0; i < state.data.length; i++) {
        if (state.data[i].month === month && state.data[i].year === year) {
          console.log('Month already exist');
          return;
        } else {
          state.data.push(newMonth);
        }
      }
    },
  },
});

export const {addExpenses, deleteExpenses} = ExpenseSlice.actions;

export default ExpenseSlice.reducer;
