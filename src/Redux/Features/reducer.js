let initialState = {
  count: 0
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.value
      }
    case 'DECREMENT':
      return (state.count > 0)? {
        ...state,
        count: state.count - action.value
      } : {
        ...state,
        count: 0
      }
    default:
      return state
  }
}

export default counterReducer