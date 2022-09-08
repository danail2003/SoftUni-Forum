import { createReducer, on } from "@ngrx/store";
import { IUser } from "src/app/core/interfaces";
import { ILoginState, IProfileState } from ".";
import { enterEditMode, exitEditMode, login, logout, profileLoad } from "./actions";

export const currentUserReducer = createReducer<IUser>(undefined,
    on(login, (_, action) => action.user),
    on(logout, () => undefined)
);

export const profileReducer = createReducer<IProfileState>({
    currentProfile: undefined,
    isInEditMode: false
},
    on(profileLoad, (state, action) => {
        return {
            ...state,
            currentProfile: action.user
        }
    }),
    on(enterEditMode, (state) => {
        return {
            ...state,
            isInEditMode: true
        }
    }),
    on(exitEditMode, (state) => {
        return {
            ...state,
            isInEditMode: false
        }
    })
);

export const loginReducer = createReducer<ILoginState>(undefined,

);