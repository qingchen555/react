import React, { useEffect } from 'react'
const MyButton = React.memo((props) => {
  const onBtClick = async () => {
    const res = await props.onClick()
    //TODO
  }

  useEffect(() => {
    console.log('initial')
  }, [])

  return <button onClick={onBtClick}>{props.children}</button>
})

export default MyButton
