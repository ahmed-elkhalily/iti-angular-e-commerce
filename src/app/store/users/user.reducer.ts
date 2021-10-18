import { UserActionTypes } from '../store.type';
import { UserActions } from './user.action';

const user = {};
export function addUserReducer(state = user, action: UserActions) {
  switch (action.type) {
    case UserActionTypes.SET_USER_ACTION:
      return action.payload;
    default:
      return state;
  }
}
