import { TextField as Muitextfield, Checkbox as MuiCheckbox, RadioGroup, Switch as MuiSwitch } from "@mui/material";
import { Select } from '../components/Select';
import { Radio } from '../components/Radio';
import { Checkbox } from '../components/Checkbox';
import { Textfield } from '../components/Textfield';
import { Switch } from '../components/Switch';

type TextFieldTypes = "text" | "password" | "textArea" | "number" | "email";
export type FieldType =  TextFieldTypes | 'checkbox' | 'radioGroup' | 'select' | "nested" | "radio"

const inputTextType: TextFieldTypes[] = [
  "text",
  "password",
  "textArea",
  "number",
];

type ComponentMap = {
  [key in TextFieldTypes | "checkbox" | "radio" | "select"]:
    | typeof Muitextfield
    | typeof MuiCheckbox
    | typeof RadioGroup
    | typeof Select
    | typeof MuiSwitch
};

const inputCmp = inputTextType.reduce(
  (acc: Partial<ComponentMap>, type: TextFieldTypes) => {
    acc[type] = Textfield;
    return acc;
  },
  {}
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentFieldsMap: any = {
  ...inputCmp,
  "checkbox": Checkbox,
  "radio": Radio,
  "select": Select,
  "switch": Switch
};

export const getComponentByType = (type: FieldType ) => {
  return componentFieldsMap[type] || null;
};