import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect, SelectChangeEvent } from "@mui/material"
import { memo, useCallback } from "react";
import { Field, FormDataError, Rules } from "../utils/types";
import { useDispatch } from "react-redux";
import { formDataActions } from "../../../feature/reducer";

type Props = {
  label: string;
  options: { value: string | number; label: string }[];
  rules: Partial<Rules>
  error: FormDataError
  name: Field["name"]
  value: string
};

export const Select = memo(({ label, options, rules, error, name, value }: Props) => {
  const isError = !value && error[name]
  const dispatch = useDispatch()

  const handleChange = useCallback((evt: SelectChangeEvent) => {
    const { name, value } = evt.target;
    dispatch(formDataActions.setData({
      [name]: value
    }));
  }, [dispatch]);

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-required-label" style={{ color: "#676262F" }}>{label}</InputLabel>
      <MuiSelect
        name={name}
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        label={label}
        onChange={handleChange}
        color="primary"
        required={rules?.required}
        error={isError}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value} >
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {isError && <FormHelperText className="Mui-error" >{rules?.message}</FormHelperText>}
    </FormControl>
  )
})