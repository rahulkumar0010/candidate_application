// Filters.js
import React, { useState } from 'react';
import { TextField, Select, MenuItem, Checkbox } from '@mui/material';

const Filters = () => {
  const [minExperience, setMinExperience] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [remote, setRemote] = useState(false);
  const [techStack, setTechStack] = useState('');
  const [role, setRole] = useState('');
  const [minBasePay, setMinBasePay] = useState('');

  const handleFilterChange = (event) => {
    // Update the filter state based on the input value
  };

  return (
    <div>
      <TextField
        label="Min Experience"
        value={minExperience}
        onChange={handleFilterChange}
        sx={{ m: 1 }}
      />
      <Select
        label="Company Name"
        value={companyName}
        onChange={handleFilterChange}
        sx={{ m: 1 }}
      >
        <MenuItem value="">All</MenuItem>
        {/* Populate company names from API response */}
      </Select>
      <TextField
        label="Location"
        value={location}
        onChange={handleFilterChange}
        sx={{ m: 1 }}
      />
      <Checkbox
        label="Remote"
        checked={remote}
        onChange={handleFilterChange}
        sx={{ m: 1 }}
      />
      <Select
        label="Tech Stack"
        value={techStack}
        onChange={handleFilterChange}
        sx={{ m: 1 }}
      >
        <MenuItem value="">All</MenuItem>
        {/* Populate tech stacks from API response */}
      </Select>
      <Select
        label="Role"
        value={role}
        onChange={handleFilterChange}
        sx={{ m: 1 }}
      >
        <MenuItem value="">All</MenuItem>
        {/* Populate roles from API response */}
      </Select>
      <TextField
        label="Min Base Pay"
        value={minBasePay}
        onChange={handleFilterChange}
        sx={{ m: 1 }}
      />
    </div>
  );
};

export default Filters;