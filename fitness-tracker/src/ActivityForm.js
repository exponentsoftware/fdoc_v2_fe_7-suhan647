import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const ActivityForm = ({ onActivityLogged }) => {
  const [activityType, setActivityType] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("");

  const handleActivityTypeChange = (event) => {
    setActivityType(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleIntensityChange = (event) => {
    setIntensity(event.target.value);
  };

  const handleLogActivity = () => {
    const activity = {
      activityType,
      duration: parseInt(duration),
      intensity: parseInt(intensity)
    };
    onActivityLogged(activity);
    setActivityType("");
    setDuration("");
    setIntensity("");
  };

  return (
    <div>
      <TextField
        label="Activity Type"
        variant="outlined"
        value={activityType}
        onChange={handleActivityTypeChange}
        margin="normal"
      />
      <TextField
        label="Duration (minutes)"
        variant="outlined"
        value={duration}
        onChange={handleDurationChange}
        margin="normal"
      />
      <TextField
        label="Intensity"
        variant="outlined"
        value={intensity}
        onChange={handleIntensityChange}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleLogActivity}>
        Log Activity
      </Button>
    </div>
  );
};

export default ActivityForm;
