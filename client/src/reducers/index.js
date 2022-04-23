import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import cv from './cv';

export const reducers = combineReducers({ posts ,auth});