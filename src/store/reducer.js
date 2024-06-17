const initialState = {
  userInfo: {
    userName: 'li',
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateInfo':
      return {
        ...state,
        userInfo: action.payload,
      }
    default:
      return state
  }
}
export default reducer
