import React, { useState } from "react";
import { Button } from "@material-ui/core";

const StepCounter = ({ stepCount, setStepCount }) => {
  const handleIncrement = () => {
    setStepCount(stepCount + 1);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleIncrement}>
        Increment Step Count
      </Button>
    </div>
  );
};

export default StepCounter;
