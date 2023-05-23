import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const CaloriesBurnedCalculator = ({ onCaloriesBurned }) => {
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");

  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleCalculateCalories = () => {
    const calories =
      activity && duration ? parseInt(activity) * parseInt(duration) * 10 : 0;
    onCaloriesBurned(calories);
  };

  return (
    <div>
      <TextField
        label="Activity (MET value)"
        variant="outlined"
        value={activity}
        onChange={handleActivityChange}
        margin="normal"
      />
      <TextField
        label="Duration (minutes)"
        variant="outlined"
        value={duration}
        onChange={handleDurationChange}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCalculateCalories}
      >
        Calculate Calories
      </Button>
    </div>
  );
};

export default CaloriesBurnedCalculator;
