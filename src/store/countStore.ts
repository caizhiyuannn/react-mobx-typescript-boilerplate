import { observable, computed, action } from "mobx";

export class countStore {
  @observable public _count: number = 0;

  @computed get counter() {
    return this._count;
  }

  @action increment = () => {
    this._count++;
  };
  @action decrement = () => {
    this._count--;
  };
}

export interface countStoreProps {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

// or export all var
// export type countStoreProps = countStore
