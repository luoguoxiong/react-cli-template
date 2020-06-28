import { init, RematchRootState, RematchDispatch } from "@rematch/core";
import { dolphins } from "./dolphins";

const models: RootModel = { dolphins };

export const store = init({
  models,
});

export type Store = typeof store;

export type Dispatch = RematchDispatch<RootModel>;

export type iRootState = RematchRootState<RootModel>;

export interface RootModel {
  dolphins: typeof dolphins;
}
