import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    // display: "flex",
    // flexDirection: "row",
    alignItems: "center",
    marginTop:"20px"
  },
  input: {
    marginBottom: theme.spacing(2)
  },
  button: {
    marginTop: theme.spacing(2)
  }
}));

const CaloriesBurnedCalculator = ({ onCaloriesBurned }) => {
  const classes = useStyles();
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
    <div className={classes.form}>
      <TextField
        label="Activity (MET value)"
        variant="outlined"
        value={activity}
        onChange={handleActivityChange}
        className={classes.input}
      />
      <TextField
        label="Duration (minutes)"
        variant="outlined"
        value={duration}
        onChange={handleDurationChange}
        className={classes.input}
      />
      <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCalculateCalories}
        className={classes.button}
      >
        Calculate Calories
      </Button>
      </div>
    </div>
  );
};

export default CaloriesBurnedCalculator;
