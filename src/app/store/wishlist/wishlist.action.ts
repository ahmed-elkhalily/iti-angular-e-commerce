import { Action } from '@ngrx/store';
import { WishListActionTypes } from '../store.type';

export class AddToWishListAction implements Action {
  readonly type = WishListActionTypes.AddToWishListType;
  constructor(public payload: {}) {
    console.log(payload);
  }
}

export class RemoveFromWishListAction implements Action {
  readonly type = WishListActionTypes.RemoveFromWishListType;
  constructor(public payload: number) {}
}
export type WishListAcitons = AddToWishListAction | RemoveFromWishListAction;
