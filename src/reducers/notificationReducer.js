import { createSlice } from "@reduxjs/toolkit"

const initialState = 'Notification here'

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    message(state, action) {
      return action.payload
    }
  }
})

export default notificationSlice.reducer