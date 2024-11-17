import { createReducer, on } from "@ngrx/store";
import { User } from "../models/user.type";
import { ageIncrement } from "../actions/user.action";

const initialState: User = {
  name: 'Vandana Gupta',
  age: 22,
}

export const userReducer = createReducer(initialState,
  on(ageIncrement, (state) => ({...state, age: state.age + 2})),
)
