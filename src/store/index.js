import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as test } from '../store/Test';

//combine all the reducers here
const rootReducer = combineReducers({
  routing: routerReducer,
  test
});

export default rootReducer;