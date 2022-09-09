import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/core/interfaces";

const currentUserDomain = '[CurrentUser]';
const profileDomain = '[Profile]';

export const login = createAction(`${currentUserDomain} Login`, props<{ user: IUser }>());
export const logout = createAction(`${currentUserDomain} Logout`);

export const profileLoad = createAction(`${profileDomain} Profile Loaded`, props<{user: IUser}>());
export const enterEditMode = createAction(`${profileDomain} Enter Edit Mode`);
export const exitEditMode = createAction(`${profileDomain} Exit Edit Mode`);
export const profileInitializing = createAction(`${profileDomain} Profile Initializing`);
export const profileLoadError = createAction(`${profileDomain} Error Happened`);