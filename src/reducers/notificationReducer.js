import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  message: 'Notification here',
  visible: false
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    displayMessage(state, action) {
      return {
        message: action.payload,
        visible: true
      }
    },
    hide(state) {
      return { ...state, visible: false }
    }
  }
})

export const { displayMessage, hide } = notificationSlice.actions
export default notificationSlice.reducer