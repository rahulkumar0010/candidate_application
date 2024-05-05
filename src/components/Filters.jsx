// Filters.js
import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";

const Filters = () => {
  const [minExperience, setMinExperience] = useState("");
  const [numberOfEmployee, setNumberOfEmployees] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [remote, setRemote] = useState(false);
  const [techStack, setTechStack] = useState("");
  const [role, setRole] = useState("");
  const [minBasePay, setMinBasePay] = useState("");

  const handleFilterChange = (event) => {
    // Update the filter state based on the input value
    console.log("event :", event.target.name);
  };

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item  xs={12} sm={2} md={2} lg={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="role"
              label="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              sx={{ m: 1 }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="frontend">Frontend</MenuItem>
              <MenuItem value="backend">Backend</MenuItem>
              <MenuItem value="ios">iOS</MenuItem>
              <MenuItem value="tech_lead">Tech lead</MenuItem>
            </Select>
          </FormControl>
        </Grid>{" "}
        <Grid item  xs={12} sm={2} md={2} lg={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Number Of Employees
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="number_of_employees"
              label="Number Of Employees"
              value={numberOfEmployee}
              onChange={handleFilterChange}
              sx={{ m: 1 }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="50">50</MenuItem>
              <MenuItem value="100">100</MenuItem>
              <MenuItem value="200">200</MenuItem>
              <MenuItem value="500">500+</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Experience</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="experience"
              label="Experience"
              value={minExperience}
              onChange={(e) => setMinExperience(e.target.value)}
              sx={{ m: 1 }}
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
        <Grid item  xs={12} sm={2} md={2} lg={2}>
          <TextField
            label="Company Name"
            name="company_name"
            value={companyName}
            onChange={handleFilterChange}
            sx={{ m: 1 }}
          />
        </Grid>
        <Grid item  xs={12} sm={2} md={2} lg={2}>
          <TextField
            label="Location"
            value={location}
            onChange={handleFilterChange}
            sx={{ m: 1 }}
          />
        </Grid>
        <Grid item  xs={12} sm={2} md={2} lg={2}>
          <Select
            label="Tech Stack"
            value={techStack}
            onChange={handleFilterChange}
            sx={{ m: 1 }}
          >
            <MenuItem value="">All</MenuItem>
            {/* Populate tech stacks from API response */}
          </Select>
        </Grid>
        <TextField
          label="Min Base Pay"
          value={minBasePay}
          onChange={handleFilterChange}
          sx={{ m: 1 }}
        />
      </Grid>
    </div>
  );
};

export default Filters;
