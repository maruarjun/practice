import { createAction, props } from "@ngrx/store";
import { StoreToken } from "../enums/store-token.enum";

export const increment = createAction(`[${StoreToken.counter}] Increment`);

export const decrement = createAction(`[${StoreToken.counter}] Decrement`);

export const multiply = createAction(`[${StoreToken.counter}] Multiply`, props<{num: number}>());


