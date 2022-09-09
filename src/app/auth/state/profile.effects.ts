import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { catchError, filter, map, mergeMap, of } from "rxjs";
import { AuthService } from "src/app/auth.service";
import { profileInitializing, profileLoad, profileLoadError } from "./actions";

@Injectable()
export class ProfileEffects {
    constructor(private actions: Actions, private authService: AuthService) { }

    onProfileInitializing$ = createEffect(() =>
        this.actions.pipe(filter(a => a.type === profileInitializing().type),
            mergeMap(() => this.authService.getProfile$()),
            map((currentProfile) => profileLoad({ user: currentProfile })),
            catchError(()=> of(profileLoadError())))
    );
}