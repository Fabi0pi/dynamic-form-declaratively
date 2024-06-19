import { FormControl, FormControlLabel, Switch as MuiSwitch } from "@mui/material"
import { memo, useCallback } from "react";
import { formDataActions } from "../../../feature/reducer";
import { useDispatch } from "react-redux";
import { Field } from "../utils/types";

type Props = {
    label?: string;
    name: Field["name"]
    value: boolean
};

export const Switch = memo(({ label, name, value }: Props) => {
    const dispatch = useDispatch()

    const handleChange = useCallback(() => {
        dispatch(formDataActions.setData({
            [name]: !value
        }));
    }, [dispatch, value, name]);

    return (
        <FormControl style={{ width: "fit-content" }}>
            <FormControlLabel control={<MuiSwitch
                onChange={handleChange}
                name={name}
                value={value}
            />} label={label} style={{ color: "black", cursor: "default" }} />
        </FormControl>
    )
})