import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { increment} = globalSlice.actions

export default globalSlice.reducer