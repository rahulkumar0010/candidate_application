import { TextField } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";

const DebounceInput = ({ onChange, delay, ...rest }) => {
  const [inputValue, setInputValue] = useState("");

  const timerRef = useRef(null);

  useEffect(() => {
    // Cleanup function to clear the timer when the component unmounts or when inputValue changes
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    // Clear the previous timer
    clearTimeout(timerRef.current);

    // Set a new timer to trigger the onChange callback after the specified delay
    timerRef.current = setTimeout(() => {
      onChange(newValue);
    }, delay);
  };

  return (
    <TextField
      sx={{ m: 1 }}
      {...rest}
      onChange={handleInputChange}
      value={inputValue}
      size="small"
      fullWidth
    />
  );
};

export default DebounceInput;
