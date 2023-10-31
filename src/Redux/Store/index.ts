import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import ExpenseSlice from '../Slices/Expences';

const rootReducer = combineReducers({
  expenses: ExpenseSlice,
});

const persistConfig = {
  storage: AsyncStorage,
  key: 'expenses',
};

const persistReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistReducers,
});

export default store;
