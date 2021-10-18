import { Action } from '@ngrx/store';
import { UserActionTypes } from '../store.type';

export class GetUserAction implements Action {
  readonly type = UserActionTypes.GET_USER_DATA;
  constructor(public payload: object) {}
}

export class SetUserAction implements Action {
  readonly type = UserActionTypes.SET_USER_ACTION;
  constructor(public payload: object) {}
}

export type UserActions = GetUserAction | SetUserAction;
