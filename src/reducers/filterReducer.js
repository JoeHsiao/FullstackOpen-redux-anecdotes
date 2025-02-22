const defaultFilter = ''

export const changeFilterAction = (text) => {
  return {
    type: 'UPDATE',
    payload: text
  }
}

const filterReducer = (state = defaultFilter, action) => {
  switch (action.type) {
    case 'UPDATE': {
      return action.payload
    }
    default:
      return state
  }
}

export default filterReducer