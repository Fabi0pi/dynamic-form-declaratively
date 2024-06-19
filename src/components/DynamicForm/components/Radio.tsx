import { FormControl, FormControlLabel, FormHelperText, FormLabel, RadioGroup, Radio as MuiRadio } from "@mui/material"
import { Field, FormDataError, Rules } from "../utils/types";
import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { formDataActions } from "../../../feature/reducer";

type Props = {
    label: string;
    options: { value: string | number; label: string }[];
    rules?: Partial<Rules>
    name: Field["name"]
    error: FormDataError
    value: boolean
};

export const Radio = memo(({ label, options, rules, name, error, value }: Props) => {
    const formLabel = rules?.required ? `${label} *` : label 
    const dispatch = useDispatch()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = useCallback((evt: any) => {
      const { name, value } = evt.target;
      dispatch(formDataActions.setData({
        [name]: value
      }));
    }, [dispatch]);

    return (
        <FormControl fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label" style={{ color: "black" }}>{formLabel}</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                {options.map((el) => {
                    return (
                        <FormControlLabel
                            name={name}
                            style={{ color: "black" }}
                            key={el.label}
                            value={el.value}
                            //   disabled
                            control={<MuiRadio />}
                            label={el.label}
                            onChange={handleChange}
                            className={error[name] ? "Mui-error" : ""}
                        />
                    )
                })}
            </RadioGroup>
            {!value && error[name] && <FormHelperText className="Mui-error">{rules?.message}</FormHelperText>}
        </FormControl>
    )
})