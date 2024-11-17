import { createAction } from "@ngrx/store";
import { StoreToken } from "../enums/store-token.enum";

export const ageIncrement = createAction(`[${StoreToken.user}] Age increment`);
