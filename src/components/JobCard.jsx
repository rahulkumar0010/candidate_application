import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { capitalizeEachWord } from "../utils/helper";

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width:"100%" }}>
      <CardContent>
        <div className="logo-container">
          <div className="logo-img-div">
            <img src={job.logoUrl} alt="" />
          </div>
          <div>
            <p className="company-name">
              {capitalizeEachWord(job.companyName)}
            </p>
            <Typography variant="h5" component="h2">
              {capitalizeEachWord(job.jobRole)}
            </Typography>
            <Typography variant="p" color="textSecondary">
              {capitalizeEachWord(job.location)}
            </Typography>
          </div>
        </div>
        <div>
          <p className="salary">
            Estimated Salary: {job.salaryCurrencyCode + " " + job.minJdSalary} -{" "}
            {job.maxJdSalary}
          </p>
        </div>

        <div id="container">
          <h4 className="job-desc">Job Description:</h4>
          <div id="textLines">
            {expanded ? (
              job.jobDetailsFromCompany
            ) : (
              <>
                <p>{job.jobDetailsFromCompany.substring(0, 80)}</p>
                <p id="blurLine">
                  {job.jobDetailsFromCompany.substring(80, 100)}...
                </p>
              </>
            )}
            {expanded ? (
              <button className="show-less" onClick={handleExpand}>
                Show less
              </button>
            ) : (
              <button id="centerButton" onClick={handleExpand}>
                Show more
              </button>
            )}
          </div>
        </div>

        <Typography variant="body2" color="textSecondary">
          Experience: {job.minExp} years
        </Typography>
        <a href={job.jdLink} target="_blank">
          <button className="job-btn">⚡ Easy Apply</button>
        </a>
      </CardContent>
    </Card>
  );
};

export default JobCard;
