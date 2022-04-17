let initialState = {
  total: 0
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        total: state.total + action.value
      }
    case 'DECREMENT':
      return {
        ...state,
        total: state.total - action.value
      }
    default:
      return state
  }
}

export default counterReducer