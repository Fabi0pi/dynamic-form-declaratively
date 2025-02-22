/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from "@mui/material"
import { FieldType } from "../utils/componentFieldsMap"
import { Field, FormDataError } from "../utils/types"
import { memo, useCallback } from "react"

type Props = {
    fields: Field[]
    error: FormDataError
    data: Record<string, any>
    getComponents: (type: FieldType) => void
}

export const FormFields = memo(({ fields, data, error, getComponents }: Props) => {

    const renderFields = useCallback((fields: Field[], data: Record<string, any>, error: FormDataError) => {
        return fields.map((el: Field) => {
            const Component: any = getComponents(el.type)
            if (el.type === "nested") {
                return <FormFields key={el.name + el.label} fields={el.fields} data={data} error={error} getComponents={getComponents} />
            }
            if (!Component) return

            return (
                <div id={el.name} className='fieldsContainer' key={el.name + el.label + el.type}>
                    <Typography color={"black"}>{el.section}</Typography>
                    <Component {...el} error={error} value={data[el.name]} />
                </div>
            )
        })
    }, [getComponents])

    return <> {renderFields(fields, data, error)} </>
})


