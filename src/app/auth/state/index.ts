export * from './reducers';
export * from './actions';

import { IUser } from "src/app/core/interfaces";

export interface ILoginState {

}

export interface IProfileState {
    currentProfile: IUser;
    isEditClicked: boolean;
}

export interface IAuthState {
    profile: IProfileState;
    login: ILoginState;
}

export interface IRootState {
    currentUser: IUser;
}

export interface IAuthModuleState extends IAuthState {
    auth: IAuthState;
}