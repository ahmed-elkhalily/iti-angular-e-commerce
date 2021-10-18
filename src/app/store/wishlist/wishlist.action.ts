import { Action } from '@ngrx/store';
import { WishListActionTypes } from '../store.type';

export class AddToWishListAction implements Action {
  readonly type = WishListActionTypes.ADD_TO_WISH_LIST;
  constructor(public payload: object) {}
}

export class RemoveFromWishListAction implements Action {
  readonly type = WishListActionTypes.REMOVE_FROM_WISH_LIST;
  constructor(public payload: number) {}
}
export type WishListAcitons = AddToWishListAction | RemoveFromWishListAction;
