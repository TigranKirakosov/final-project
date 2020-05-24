import { createAction } from '@reduxjs/toolkit';

import actionTypes from 'State/redux/user/user.action-types';

export const checkUserSession = createAction(actionTypes.CHECK_USER_SESSION);

export const onUserSignOut = createAction(actionTypes.USER_SIGNED_OUT);

export const googleSignInStart = createAction(actionTypes.GOOGLE_SIGN_IN_START);

export const emailSignInStart = createAction(actionTypes.EMAIL_SIGN_IN_START, emailAndPassword => ({
  payload: emailAndPassword
}));

export const signInSuccess = createAction(actionTypes.SIGN_IN_SUCCESS, user => ({
  payload: user
}));

export const signInFailure = createAction(actionTypes.SIGN_IN_FAILURE, error => ({
  payload: error
}));
