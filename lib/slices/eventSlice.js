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
      id: 15,
      user: "test",
      title: "Meeting Event",
      start: new Date(2020, 10, 18, 7, 0, 0),
      end: new Date(2020, 10, 20, 19, 30, 0),
      desc: "Meeting Event",
      budget: "10000000",
      type: "Party",
      status: "done",
    },
    {
      id: 16,
      user: "test",
      title: "Model Event",
      start: new Date(2020, 10, 16, 7, 0, 0),
      end: new Date(2020, 10, 18, 19, 30, 0),
      desc: "Model Event",
      budget: "20000000",
      type: "Event",
      status: "cancelled",
    },
    {
      id: 17,
      user: "test",
      title: "Family Gathering",
      start: new Date(2020, 10, 22, 7, 0, 0),
      end: new Date(2020, 10, 23, 19, 30, 0),
      desc: "Family Gathering",
      budget: "20000000",
      type: "Event",
      status: "progress",
    },
    {
      id: 18,
      user: "test",
      title: "Fashion Show",
      start: new Date(2020, 10, 15, 7, 0, 0),
      end: new Date(2020, 10, 16, 19, 30, 0),
      desc: "Fashion Show",
      budget: "20000000",
      type: "Event",
      status: "cancelled",
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
