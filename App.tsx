import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {gStyles} from './src/Utils/GlobalStyles';
import StackNavigators from './src/Navigation';
import store from './src/Redux/Store';
import persistStore from 'redux-persist/es/persistStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={gStyles.container}>
          <View style={gStyles.container}>
            <StackNavigators />
          </View>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
