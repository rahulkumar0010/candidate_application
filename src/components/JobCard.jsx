import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {job.jobRole}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {job.companyName}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {job.location}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {expanded
            ? job.jobDetailsFromCompany
            : `${job.jobDetailsFromCompany.substring(0, 100)}...`}
          {expanded ? (
            <Button onClick={handleExpand}>Show less</Button>
          ) : (
            <Button onClick={handleExpand}>Show more</Button>
          )}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Experience: {job.minExp} years
        </Typography>
        <Button variant="contained" color="primary">
          Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
