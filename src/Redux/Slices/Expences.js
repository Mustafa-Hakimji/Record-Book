import {createSlice} from '@reduxjs/toolkit';

const ExpenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    data: [],
    loading: false,
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
        console.log('Redux NewMonth Pushed');
        const newMonth = {
          month,
          year,
          expenses: [],
        };

        state.data.push(newMonth);
      }

      state.data.filter(item => {
        if (item.month === month && item.year === year) {
          console.log('Redux filter if condition');
          return item.expenses.push(action.payload);
        }
      });

      console.log('REDUX after adding EXP --> ', JSON.stringify(state.data));
      console.log('REDUX Length State.data --> ', state.data.length);
    },

    deleteExpenses(state, action) {
      const {month, year, index} = action.payload;
      state.data.filter(item => {
        if (item.month === month && item.year === year) {
          item.expenses.splice(index, 1);
        }
      });
    },
  },
});

export const {addExpenses, deleteExpenses} = ExpenseSlice.actions;

export default ExpenseSlice.reducer;
