import { WishListAcitons } from './wishlist.action';
import { WishListActionTypes } from '../store.type';

const initWishList = [];
export function wishListReducer(state = initWishList, action: WishListAcitons) {
  switch (action.type) {
    case WishListActionTypes.ADD_TO_WISH_LIST:
      return [...state, action.payload];
    case WishListActionTypes.REMOVE_FROM_WISH_LIST:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
