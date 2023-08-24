import { atom } from "recoil"

export const productCartState = atom({
    key: 'productCartStateKey',
    default: [],
  });