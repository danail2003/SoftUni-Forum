import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUser } from "src/app/core/interfaces";
import { IAuthModuleState, IProfileState } from ".";

export const currentUserFeautureSelector = createFeatureSelector<IUser>('currentUser');
export const authStateFeatureSelector = createFeatureSelector<IAuthModuleState>('auth');

export const isEditClickedSelector = createSelector(authStateFeatureSelector, (profile) => {
    return profile.profile.isEditClicked;
});

export const currentUserSelector = createSelector(currentUserFeautureSelector, (currentUser) => {
    return currentUser;
});

export const hasErrorSelector = createSelector(authStateFeatureSelector, (profile) => {
    return profile.profile.hasError;
});
