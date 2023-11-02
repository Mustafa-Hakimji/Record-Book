import {createSlice} from '@reduxjs/toolkit';

const ExpenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    data: [],
    loading: false,
    totalExp: 0,
  },
  reducers: {
    addExpenses(state, action) {
      const {month, year} = action.payload;

      const isMonth = () => {
        for (let i = 0; i < state.data.length; i++) {
          if (state.data[i].month === month && state.data[i].year === year) {
            return true;
          }
        }
        return false;
      };

      const result = isMonth();

      if (!result) {
        const newMonth = {
          month,
          year,
          expenses: [],
        };

        state.data.push(newMonth);
      }

      state.data.filter(item => {
        if (item.month === month && item.year === year) {
          return item.expenses.push(action.payload);
        }
      });
    },

    deleteExpenses(state, action) {
      const {month, year} = action.payload.item;
      const {index} = action.payload;

      state.data.filter(item => {
        if (item.month === month && item.year === year) {
          item.expenses.splice(index, 1);
        }
      });
    },
    editExpense(state, action) {
      const {month, year} = action.payload.item;
      const {index} = action.payload;

      state.data.filter(item => {
        if (item.month === month && item.year === year) {
          item.expenses[index].title = title;
          item.expenses[index].amount = amount;
        }
      });
    },
  },
});

export const {addExpenses, deleteExpenses} = ExpenseSlice.actions;

export default ExpenseSlice.reducer;
