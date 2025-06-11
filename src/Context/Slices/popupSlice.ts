import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { NotificationEvent } from '@/Hooks/Hub/useNotificationsHub'

interface PopupState {
  isOpen: boolean
  event: NotificationEvent | null
}

const initialState: PopupState = {
  isOpen: false,
  event: null
}

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup(state, action: PayloadAction<NotificationEvent>) {
      state.isOpen = true
      state.event = action.payload
    },
    closePopup(state) {
      state.isOpen = false
      state.event = null
    }
  }
})

export const { openPopup, closePopup } = popupSlice.actions
export default popupSlice.reducer;