import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state,{payload}) => {
      console.log(payload)
      state.isAuthenticated = payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setIsAuthenticated } = authSlice.actions

export default authSlice.reducer