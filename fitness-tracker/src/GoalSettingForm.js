import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const GoalSettingForm = ({ onGoalSet }) => {
  const [stepGoal, setStepGoal] = useState("");
  const [caloriesBurnedGoal, setCaloriesBurnedGoal] = useState("");
  const [activeMinutesGoal, setActiveMinutesGoal] = useState("");

  const handleStepGoalChange = (event) => {
    setStepGoal(event.target.value);
  };

  const handleCaloriesBurnedGoalChange = (event) => {
    setCaloriesBurnedGoal(event.target.value);
  };

  const handleActiveMinutesGoalChange = (event) => {
    setActiveMinutesGoal(event.target.value);
  };

  const handleSetGoal = () => {
    const goal = {
      stepGoal: parseInt(stepGoal),
      caloriesBurnedGoal: parseInt(caloriesBurnedGoal),
      activeMinutesGoal: parseInt(activeMinutesGoal)
    };
    onGoalSet(goal);
  };

  return (
    <div>
      <TextField
        label="Step Goal"
        variant="outlined"
        value={stepGoal}
        onChange={handleStepGoalChange}
        margin="normal"
      />
      <TextField
        label="Calories Burned Goal"
        variant="outlined"
        value={caloriesBurnedGoal}
        onChange={handleCaloriesBurnedGoalChange}
        margin="normal"
      />
      <TextField
        label="Active Minutes Goal"
        variant="outlined"
        value={activeMinutesGoal}
        onChange={handleActiveMinutesGoalChange}
        margin="normal"
      />
      <div style={{marginBottom:"20px", marginTop:"20px"}}>
      <Button variant="contained" color="primary" onClick={handleSetGoal}>
        Set Goal
      </Button>
      </div>
    </div>
  );
};

export default GoalSettingForm;
