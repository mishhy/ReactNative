import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productReducer from './store/reducers/product';
import ShopNavigator from './navigation/ShopNavigation';

const rootReducer=combineReducers({
  products:productReducer
});
const store= createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
    <ShopNavigator/>
    </Provider>
  );
}


