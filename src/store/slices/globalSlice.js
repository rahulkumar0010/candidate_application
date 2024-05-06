import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  isLoading: false,
  offset: 0,
  filterData: {
    minExp: "",
    companyName: "",
    location: "",
    remote: "",
    techStack: "",
    jobRole: "",
    minJdSalary: "",
  },
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setJobs: (state, { payload }) => {
      state.jobs = payload;
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setOffset: (state, { payload }) => {
      if (payload === 0) {
        state.offset = 0;
        return;
      }
      if (payload === "filter") {
        state.offset = 10;
        return;
      }
      let data = state.offset + payload;
      state.offset = data;
    },
    setFilterData: (state, { payload }) => {
      state.filterData = { ...state.filterData, ...payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setJobs, setLoading, setOffset, setFilterData } =
  globalSlice.actions;

export default globalSlice.reducer;
