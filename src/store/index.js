import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as test } from '../store/Test';

const rootReducer = combineReducers({
  routing: routerReducer,
  test
});

export default rootReducer;