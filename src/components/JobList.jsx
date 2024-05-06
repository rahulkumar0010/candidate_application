// JobList.js
import React, { useState, useEffect } from "react";
import { Grid, Skeleton } from "@mui/material";
import JobCard from "./JobCard";
import Filters from "./Filters";
import { useDispatch, useSelector } from "react-redux";
import { setJobs, setLoading, setOffset } from "../store/slices/globalSlice";
import { filterHandler } from "../utils/helper";

const JobList = () => {
  const dispatch = useDispatch();
  const { offset, isLoading, jobs, filterData } = useSelector(
    (state) => state.global
  );

  const [filters, setFilters] = useState({});

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  useEffect(() => {
    dispatch(setLoading(true));
    fetchJobs();
  }, [offset, filterData]);

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
        const filteredData = data?.jdList.filter((obj) =>
          Object.values(obj).every((value) => value !== null)
        );
        let jobdata = [...jobs, ...filteredData];
        const newData = filterHandler(jobdata, filterData);

        dispatch(setJobs(newData));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        console.error(error);
        dispatch(setLoading(false));
      });
  };

  const handleFilterChange = (filters) => {
    setFilters(filters);
    dispatch(setOffset(0));
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }

    dispatch(setOffset(10));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Add scroll event listener on component mount

  return (
    <div>
      <Filters onFilterChange={handleFilterChange} />
      <Grid container spacing={3} >
        {jobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={job.jdUid + "-" + index}>
            <JobCard job={job} />
          </Grid>
        ))}
        {isLoading
          ? [1, 2, 3, 4].map((item, index) => (
              <Grid
                item
                gap={5}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={item + "" + index}
              >
                <Skeleton
                  variant="rounded"
                  sx={{ maxWidth: 345 }}
                  height={200}
                />
              </Grid>
            ))
          : null}
      </Grid>
    </div>
  );
};

export default JobList;
