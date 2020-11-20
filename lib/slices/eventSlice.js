import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import cookie from "js-cookie";
const endpoint = "https://react-test-d7278.firebaseio.com";

const initialState = {
  events: [
    {
      id: 14,
      user: "test",
      title: "Today",
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3)),
      desc: "event today",
      budget: "0",
      type: "Today",
    },
    {
      id: 15,
      user: "test",
      title: "Wedding Event",
      start: new Date(2020, 10, 18, 7, 0, 0),
      end: new Date(2020, 10, 20, 19, 30, 0),
      desc: "wedding event",
      budget: "10000000",
      type: "Party",
    },
  ],
  teamGroup: [],
  loading: "idle",
};

export const getEvent = createAsyncThunk(
  "event/getEvent",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(endpoint + "/event.json");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const eventSlice = createSlice({
  name: "eventState",
  initialState: initialState,
  reducers: {
    setEvent: (state, action) => {
      state.events = [...state.events, action.payload];
    },
    setTeamGroup: (state, action) => {
      state.teamGroup = [...state.teamGroup, action.payload];
    },
  },
  extraReducers: {
    [getEvent.pending]: (state) => {
      state.events = [];
      state.loading = "loading";
      delete state.error;
    },
    [getEvent.fulfilled]: (state, action) => {
      state.events = action.payload;
      state.loading = "loaded";
    },
    [getEvent.rejected]: (state, action) => {
      state.loading = "error";
      state.error = action.payload.error;
    },
  },
});

export const { setEvent, setTeamGroup } = eventSlice.actions;

export default eventSlice.reducer;
