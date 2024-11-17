import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../models/user.type';
import { StoreToken } from '../enums/store-token.enum';

export const selectUser = createFeatureSelector<User>(StoreToken.user);

export const selectName = createSelector(selectUser, (state) => state.name);

export const selectAge = createSelector(selectUser, (state) => state.age);
