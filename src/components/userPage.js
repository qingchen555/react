import { useDispatch, useSelector } from 'react-redux'

export default function UserPage() {
  // useSelector : get the state value from store
  const userInfo = useSelector((state) => state.userInfo)
  // useDispatch: return the dispatch object collection
  const dispatch = useDispatch()

  const onUpdate = () => {
    dispatch({
      type: 'updateInfo',
      payload: {
        userName: 'guigui',
      },
    })
  }
  return (
    <div>
      <div>
        name: <input type="text" value={userInfo.userName} />
      </div>
      <div>
        <button onClick={onUpdate}>update the user info</button>
      </div>
    </div>
  )
}
