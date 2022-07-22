import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!/.{6,}@gmail\.(com|bg)/.test(value)) {
        return {
            email: true
        }
    }

    return null;
}