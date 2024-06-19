import { FormControl, FormControlLabel, FormHelperText, Checkbox as MuiCheckbox } from "@mui/material"
import { Field, FormDataError, Rules } from "../utils/types";
import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { formDataActions } from "../../../feature/reducer";


type Props = {
    label?: string;
    rules?: Partial<Rules>
    defaultChecked: boolean
    name: Field["name"]
    value: boolean 
    error: FormDataError
};
export const Checkbox = memo(({ rules, label, defaultChecked, name, value, error }: Props) => {
    const dispatch = useDispatch()

    const handleChange = useCallback(() => {
        dispatch(formDataActions.setData({
            [name]: !value
        }));
    }, [dispatch, name, value]);

    return (
        <FormControl>
            <FormControlLabel
                value={value}
                onChange={handleChange}
                name={name}
                style={{ color: "black" }}
                required={rules?.required}
                control={<MuiCheckbox defaultChecked={defaultChecked} />}
                label={label} />
            {!value && error[name] && <FormHelperText className="Mui-error">{rules?.message}</FormHelperText>}
        </FormControl>
    )
})