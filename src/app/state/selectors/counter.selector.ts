import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Counter } from '../models/counter.type';
import { StoreToken } from '../enums/store-token.enum';

export const selectCounter = createFeatureSelector<Counter>(StoreToken.counter);

export const getCounter = createSelector(
  selectCounter,
  (state) => state.counter
);

export const selectDescription = createSelector(
  selectCounter,
  (state) => state.description
);
