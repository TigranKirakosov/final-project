import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { checkUserSession, onUserSignOut, signInSuccess, signInFailure } from 'App/state/redux/user/user.actions';

const INITIAL_STATE = {
  userId: null,
  userData: null,
  errorMessage: null,
  isLoadingUser: false
};

const userReducer = createReducer(INITIAL_STATE, {
  [checkUserSession.type]: state => {
    state.isLoadingUser = true;
  },
  [onUserSignOut.type]: state => {
    state.userId = null;
    state.userData = null;
    state.isLoadingUser = false;
    state.errorMessage = null;
  },
  [signInSuccess.type]: (state, action: PayloadAction<any>) => {
    state.userId = action.payload.id;
    state.userData = action.payload;
    state.isLoadingUser = false;
    state.errorMessage = null;
  },
  [signInFailure.type]: (state, action: PayloadAction<any>) => {
    state.isLoadingUser = false;
    state.errorMessage = action.payload;
  }
});

export default userReducer;
