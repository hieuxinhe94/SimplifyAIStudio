import { configureStore } from '@reduxjs/toolkit'
import openCloseDetailSlice from 'views/admin/visualization/components/actions/adminReducers'

export default configureStore({
  reducer: {
    openDetail: openCloseDetailSlice,
  },
})