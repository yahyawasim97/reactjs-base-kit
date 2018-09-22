/*
 * @file: index.js
 * @description: Combine all reducers with persist settings.
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 * */

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import app from './app';
import encryptor from '../utilities/encryptor';
import user from './user';

// user state to be stored in storage, but lets not persist someEmphemeralKey
const userPersistConfig = {
  blacklist: ['router'],
  key: 'user',
  storage,
  transforms: [encryptor],
};

/** ********* Combine reducers ********* */
const reducers = combineReducers({
  app,
  user: persistReducer(userPersistConfig, user),
});

export default reducers;
