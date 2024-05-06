// Filters.js

import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilterData, setOffset } from "../store/slices/globalSlice";
import DebounceInput from "./DebounceInput";

const Filters = () => {
  const dispatch = useDispatch();
  const { filterData } = useSelector((state) => state.global);

  return (
    <>
      <Grid container px={"10px"} gap={1}>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Minimum Experience
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="experience"
              label="Experience"
              value={filterData.minExp || ""}
              onChange={(e) => {
                dispatch(setFilterData({ minExp: e.target.value }));
                dispatch(setOffset(0));
              }}
              sx={{ m: 1 }}
              size="small"
              fullWidth
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <DebounceInput
            delay={500}
            label="Company Name"
            name="company"
            value={filterData?.companyName || ""}
            onChange={(value) => {
              dispatch(setFilterData({ companyName: value }));
              dispatch(setOffset(0));
            }}
          />
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <DebounceInput
            delay={500}
            label="Location"
            value={filterData?.location || ""}
            onChange={(value) => {
              dispatch(setFilterData({ location: value }));
              dispatch(setOffset(0));
            }}
          />
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Remote</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="remote"
              label="Remote"
              value={filterData?.remote || ""}
              onChange={(e) => {
                dispatch(setFilterData({ remote: e.target.value }));
                dispatch(setOffset(0));
              }}
              sx={{ m: 1 }}
              size="small"
              fullWidth
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="remote">Remote Jobs</MenuItem>
              <MenuItem value="onsite">Onsite</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={2} md={2} lg={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="role"
              label="Role"
              value={filterData?.jobRole || ""}
              onChange={(e) => {
                dispatch(setFilterData({ jobRole: e.target.value }));
                dispatch(setOffset(0));
              }}
              sx={{ m: 1 }}
              size="small"
              fullWidth
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="frontend">Frontend</MenuItem>
              <MenuItem value="backend">Backend</MenuItem>
              <MenuItem value="ios">iOS</MenuItem>
              <MenuItem value="tech_lead">Tech lead</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <DebounceInput
            delay={500}
            label="Min Base Pay"
            value={filterData?.minJdSalary || ""}
            onChange={(value) => {
              dispatch(setFilterData({ minJdSalary: value }));
              dispatch(setOffset(0));
            }}
          />
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <DebounceInput
            delay={500}
            label="Tech Stack"
            value={filterData.techStack || ""}
            onChange={(value) => {
              dispatch(setFilterData({ techStack: value }));
              dispatch(setOffset(0));
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Filters;
