import { WishListAcitons } from './wishlist.action';
import { WishListActionTypes } from '../store.type';
const initWishList = [];
export function wishListReducer(state = initWishList, action: WishListAcitons) {
  switch (action.type) {
    case WishListActionTypes.AddToWishListType:
      console.log(state);
      return [...state, action.payload];
    case WishListActionTypes.RemoveFromWishListType:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
