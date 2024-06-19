import { computeHeadingLevel } from '@testing-library/react'
import { useState, useEffect } from 'react'

function CalculateNumber() {
  const [number, setNumber] = useState(0)
  let timeObj = null

  const onSetNumber = () => {
    setNumber((number) => number + 1)
  }

  const onSetNumberAfterTime = () => {
    console.log('====')
    timeObj = setTimeout(() => {
      console.log('the value is:', number)
    }, 2000)
  }

  useEffect(() => {
    return () => clearTimeout(timeObj)
  })

  return (
    <>
      <div>curent value:{number}</div>
      <button onClick={onSetNumber}>立即执行</button>
      <button onClick={onSetNumberAfterTime}>延时执行</button>
    </>
  )
}

export default CalculateNumber
