import './App.css'
import jsonData from './components/DynamicForm/utils/formFields.json'
import { Form } from './components/DynamicForm/Form'
import { useSelector } from 'react-redux'
import { selectDataResult, selectTempData } from './feature/selectors'
import { useMemo } from 'react'
import { Advice } from './components/Advice'

function App() {
  const data = useSelector(selectTempData)
  const dataResult = useSelector(selectDataResult)
  const memoizedData = useMemo(() => data, [data])

  return (
    <div>
      {dataResult ?
        <Advice />
        :
        <Form jsonData={jsonData} data={memoizedData} />
      }
    </div>
  )

}

export default App