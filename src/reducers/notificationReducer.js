import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    displayMessage(state, action) {
      return action.payload
    },
    clear() {
      return ''
    }
  }
})

export const setNotification = (message, sec) => {
  return dispatch => {
    dispatch(displayMessage(message))
    setTimeout(() => dispatch(clear()), sec * 1000)
  }
}

export const { displayMessage, clear } = notificationSlice.actions
export default notificationSlice.reducer