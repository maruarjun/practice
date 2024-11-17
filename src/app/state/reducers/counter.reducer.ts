// export const loaderReducer = createReducer(
//   initialState,
//   on(startLoader, (state) => ({ ...state, loader: true })),
//   on(stopLoader, (state) => ({ ...state, loader: false })),
// );

import { createReducer, on } from '@ngrx/store';
import { decrement, increment, multiply } from '../actions/counter.action';
import { Counter } from '../models/counter.type';

const initialState: Counter = {
  counter: 0,
  description: 'This is counter description'
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(multiply, (state, { num }) => ({ ...state, counter: state.counter * num }))
);
