  import { createSlice } from '@reduxjs/toolkit'

  export const openCloseDetailSlice = createSlice({
    name: 'openCloseDetail',
    initialState: {
      value: false,
    },
    reducers: {
      openDetail: (state) => {
       
        state.value = true
      },
      closeDetail: (state) => {
        state.value = false
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { openDetail, closeDetail} = openCloseDetailSlice.actions
  
  export default openCloseDetailSlice.reducer