/* eslint-disable @typescript-eslint/no-explicit-any */
import './style.css'
import { memo, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { formDataActions } from '../../feature/reducer'
import { FormDataError, JSONFormData, Data } from './utils/types'
import { FieldType, getComponentByType } from './utils/componentFieldsMap'
import { FormFields } from './components/FormFields'
import { useDrop } from 'react-dnd'

type Props = {
  jsonData: JSONFormData
  data: Partial<Data>
  onDrop: (item: any) => void
}

export const Form = memo(({ jsonData, data, onDrop }: Props) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'item',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  console.log("🚀 ~ const[{isOver},drop]=useDrop ~ isOver:", isOver)
  const [errors, setErrors] = useState({})
  const dispatcht = useDispatch()
  const { fields } = jsonData

  const handleGetComponents = useCallback((type: FieldType) => 
    getComponentByType(type)
  ,[])

  const handleSumbit = useCallback(() => {
    const newErrors:FormDataError = {};

    Object.entries(data).map(([key, value]) => {
      const emptyValue = value === "" || value === null
      if (emptyValue) {
        newErrors[key] = true;
      }
    });

    setErrors(newErrors);

    const hasErrors = Object.keys(newErrors).length > 0;
    if (!hasErrors) {
      dispatcht(formDataActions.setData(data));
      dispatcht(formDataActions.setDataSuccess(true));
    }
  }, [dispatcht, data])

  return (
    <div className='form' ref={drop}>
      <FormFields fields={fields} data={data} error={errors} getComponents={handleGetComponents} />
      <button type='submit' onClick={handleSumbit}>Submit</button>
    </div>
  )
})
