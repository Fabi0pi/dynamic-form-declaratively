/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css'
import jsonData from './components/DynamicForm/utils/formFields.json'
import { Form } from './components/DynamicForm/Form'
import { useSelector } from 'react-redux'
import { selectDataResult, selectTempData } from './feature/selectors'
import { useEffect, useMemo, useState } from 'react'
import { Advice } from './components/Advice'

function App() {
  const [droppedItems, setDroppedItems] = useState<any>([]);
  console.log("🚀 ~ App ~ droppedItems:", droppedItems)

  const handleDrop = (item: any) => {
    console.log("🚀 ~ handleDrop ~ item:", item)
    setDroppedItems((prevItems: any) => [...prevItems, item]);
  };
  const data = useSelector(selectTempData)
  const dataResult = useSelector(selectDataResult)
  const memoizedData = useMemo(() => data, [data])
  

  return (
    <div>
      {dataResult ?
        <Advice />
        :
        <div>
          <Form jsonData={jsonData} data={memoizedData} onDrop={handleDrop} />
          {droppedItems.map((item, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '5px',
                marginTop: '10px',
                backgroundColor: 'lightblue',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      }
    </div>
  )

}

export default App