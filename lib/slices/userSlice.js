import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import cookie from "js-cookie";
const endpoint = "";

const initialState = {
  user: [],
  loading: "idle",
};

export const logUserIn = createAsyncThunk(
  "userLoginState/userLogin",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(endpoint + "/users");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

// User Slice
const userSlice = createSlice({
  name: "userLoginState",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [logUserIn.pending]: (state) => {
      state.user = [];
      state.loading = "loading";
      delete state.error;
    },
    [logUserIn.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = "loaded";
    },
    [logUserIn.rejected]: (state, action) => {
      state.loading = "error";
      state.error = action.payload.error;
    },
  },
});

export default userSlice.reducer;
