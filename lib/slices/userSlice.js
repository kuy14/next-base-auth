import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import cookie from "js-cookie";
const endpoint = "https://jsonplaceholder.typicode.com";

let getAuthUser = cookie.get("__baseauthuser");
const initialState = cookie.get("__baseauthuser")
  ? {
      user: JSON.parse(getAuthUser),
      loading: "idle",
    }
  : {
      user: [],
      loading: "idle",
    };

export const logUserIn = createAsyncThunk(
  "userLoginState/userLogin",
  async (loginData, thunkAPI) => {
    try {
      // check account login type, username or email
      let accountType = "";
      if (loginData.username.includes("@" && ".")) {
        accountType = "/users?email=" + loginData.username;
      } else {
        accountType = "/users?username=" + loginData.username;
      }

      const response = await axios.get(endpoint + accountType);

      //check if user data is available
      if (response.data.length !== 0) {
        cookie.set("__baseauthuser", JSON.stringify(response.data), {
          expires: 1,
          path: "/",
        });
      }
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
  reducers: {
    doLogout: (state) => {
      state.user = [];
      cookie.remove("__baseauthuser");
    },
  },
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

export const { doLogout } = userSlice.actions;

export default userSlice.reducer;
