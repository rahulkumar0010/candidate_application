// JobList.js
import React, { useState, useEffect } from "react";
import { Grid, Skeleton } from "@mui/material";
import JobCard from "./JobCard";
import Filters from "./Filters";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  useEffect(() => {
    setLoading(true);
    fetchJobs();
  }, [offset, filters]);

  const fetchJobs = () => {
    const body = JSON.stringify({
      limit: 10,
      offset,
    });

    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
      method: "POST",
      headers: myHeaders,
      body,
    })
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data?.jdList.filter(obj =>
          Object.values(obj).every(value => value !== null)
        );
        setJobs([...jobs, ...filteredData]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleFilterChange = (filters) => {
    setFilters(filters);
    setOffset(0);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    setOffset((prevState) => prevState + 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Add scroll event listener on component mount

  return (
    <div>
      <Filters onFilterChange={handleFilterChange} />
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={job.jdUid}>
            <JobCard job={job} />
          </Grid>
        ))}
        {loading
          ? [1, 2, 3, 4].map((item, index) => (
              <Grid item gap={5} xs={12} sm={6} md={4} lg={3} key={item+""+index}>
               <Skeleton variant="rounded" maxWidth={345} height={200} />
              </Grid>
            ))
          : null}
      </Grid>
    </div>
  );
};

export default JobList;
