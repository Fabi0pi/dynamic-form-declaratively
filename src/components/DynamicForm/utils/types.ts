import { FieldType } from './componentFieldsMap';

export type Nullable<T> = T | null;

export type Rules = {
  regex: boolean;
  message: string;
  required: boolean;
  regexInvalidMsg: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type JSONFormData = Record<string, any>

export type Field = {
  type: FieldType;
  label: string;
  section?: string;
  error?: boolean;
  name: string;
  placeholder: string;
  rules?: Partial<Rules>;
  fields: Field[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type FormDataError = Record<Field["name"], boolean>

export type Data = {
  firstName: string;
  lastName: string;
  phoneNumber: Nullable<number>;
  email: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: Nullable<number>;
  something: boolean;
  country: string;
  gender: string;
  termsAndCondition: boolean;
  newsletterSubscription: boolean;
  prefMethod: string;
}
