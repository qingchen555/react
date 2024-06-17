import { useDispatch, useSelector } from 'react-redux'
import MyButton from './MyButton'
import { useCallback } from 'react'

export default function UserPage() {
  // useSelector : get the state value from store
  const userInfo = useSelector((state) => state.userInfo)
  // useDispatch: return the dispatch object collection
  const dispatch = useDispatch()

  // when child component have the self logic, so use the useCallback to reduce the repeat render
  const onUpdate = useCallback(() => {
    dispatch({
      type: 'updateInfo',
      payload: {
        userName: 'guigui',
      },
    })
  }, dispatch)
  return (
    <div>
      <div>
        name: <input type="text" value={userInfo.userName} />
      </div>
      <div>
        <MyButton onClick={onUpdate}>update the user info</MyButton>
      </div>
    </div>
  )
}
