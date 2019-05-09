import { countStore } from "./countStore";

const createStore = () => {
  return {
    count: new countStore()
  };
};

export const store = createStore();

export type appStore = typeof store;

export * from "./countStore";
