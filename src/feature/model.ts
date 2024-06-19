import { Nullable } from '../components/DynamicForm/utils/types';

export type InitialState = {
    tempData: Partial<TempData>
    dataResult: boolean
}

export type TempData = {
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
