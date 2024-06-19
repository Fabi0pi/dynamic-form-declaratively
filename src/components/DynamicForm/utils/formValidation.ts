import { Field } from './types';

interface InitialState {
    [key: string]: string | number | boolean;
}

export const validate = (formData: Field[], formValue: InitialState, setError: (data: boolean) => void): boolean => {
    const validationResults = formData.map((e) => {
        const name: string | number | boolean = formValue[e.name];
        if (e.type === "nested" && e.fields) {
            return validate(e.fields, formValue, setError);
        }
        if (e.rules && e.rules?.required === true && (name === undefined || name === "")) {
            setError(true);
            return false;
        }
        return true;
    });

    return !validationResults.includes(false);
};

export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }