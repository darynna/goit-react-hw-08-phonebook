import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestCurrent, requestLogin, requestLogout, requestRegister, setToken } from "service/phonebookAPI";

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formDate, thunkAPI) => {
    try {
      const response = await requestLogin(formDate);
      console.log(response)
      return response; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
    'auth/register',
    async (formDate, thunkAPI) => {
      try {
        const response = await requestRegister(formDate);
        console.log(response)
        return response; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const refreshThunk = createAsyncThunk(
    'auth/refreh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState()
      const token = state.auth.token
      console.log(token)
      console.log('hello')
      
      try {
        setToken(token)
        const response = await requestCurrent();
        console.log(response)
        return response; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },{
      condition: (_, thunkAPI) =>{
        const state = thunkAPI.getState()
        const token = state.auth.token;
        if (!token) return false;
        return true
      }
    }
  );

  export const logOutThunk = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
      try {
        const response = await requestLogout();
        return response; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  

const INITIAL_STATE = {
  token: null,
  user:{
   email: null,
   name: null
  },
  authenticated: false,
  isLoading: false,
  error: null,

};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user
    
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user
    
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(refreshThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.user = action.payload
    
      })
      .addCase(refreshThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logOutThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOutThunk.fulfilled, (state, action) => {
        return INITIAL_STATE
    
      })
      .addCase(logOutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

    
});

export const { setFilterTerm } = authSlice.actions;
export const authsReducer = authSlice.reducer;