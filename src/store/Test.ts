import { Reducer } from 'redux';
import { TestVM } from '../models/TestVM';
import { Test as actionTypes } from './actionTypes';
import initialState from './initialState';

//state
export interface TestState extends TestVM {

};

//actions
interface TestLoad {
  type: string;
}

//known actions

//action creators
export const actionCreators = {
  testLoad: () => (dispatch:any, getState:any) => {
    dispatch(<TestLoad>{type: actionTypes.TEST_LOAD});
  }
};

//reducer
export const reducer: Reducer<TestState> = (state: TestState = initialState.test, action: TestLoad) => {
  switch (action.type) {
    case actionTypes.TEST_LOAD:
      return {...state, text:'this is the second text from redux, after action was dispatched'};
    default:
      return {...state};
  }
} 