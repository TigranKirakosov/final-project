import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'State/redux/store';

export const userSelector = createSelector((state: RootState) => state.user, user => user);
