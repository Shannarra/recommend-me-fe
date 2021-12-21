import {USER_ACTIONS} from "../user.constants";

export const userReducer = (state = {user: {}, loading: true}, action: any) => {
  switch (action.type) {
      case USER_ACTIONS.LOGIN:
          return {
              user: action.payload,
              loading: false,
              error: null
          }
      case USER_ACTIONS.LOGIN_ERR:
          return {
              user: null,
              loading: false,
              error: {
                  message: "User login failed! Err: " + action.payload.message
              }
          }
      case USER_ACTIONS.LOGIN_JWT_RECEIVED:
          return {
              ...state,
              token: action.payload
          }
      default:
          return state;
  }
}
