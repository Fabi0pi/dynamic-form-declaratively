import { FormControl, FormHelperText, TextField as MuitextField } from "@mui/material"
import { Field, FormDataError, Rules } from "../utils/types";
import { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { formDataActions } from "../../../feature/reducer";
import { validateEmail } from "../utils/formValidation";

type Props = {
  label: Field["label"];
  name: Field["name"];
  rules?: Partial<Rules>
  error: FormDataError
  value: string
};

export const Textfield = memo(({ label, rules, name, error, value }: Props) => {
  const [emailError, setEmailError] = useState(false)
  const isError = !value && error[name]
  const dispatch = useDispatch()

  const handleEmailValidation = useCallback((name: string, value: string) => {
    if (value && name === "email" && !validateEmail(value)) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
  }, [setEmailError])


  const handleChange = useCallback((evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    handleEmailValidation(name, value)
    dispatch(formDataActions.setData({
      [name]: value
    }));
  }, [dispatch, handleEmailValidation]);


  return (
    <FormControl fullWidth>
      <MuitextField error={isError} name={name} id="outlined-basic" label={label} variant="outlined" required={rules?.required} onChange={handleChange} />
      {isError && <FormHelperText className="Mui-error" >{rules?.message}</FormHelperText>}
      {emailError && <FormHelperText className="Mui-error" >{rules?.regexInvalidMsg}</FormHelperText>}
    </FormControl>
  )
})