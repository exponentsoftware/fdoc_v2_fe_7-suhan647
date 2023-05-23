import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, Button, LinearProgress } from '@material-ui/core';
import StepCounter from './StepCounter';
import CaloriesBurnedCalculator from './CaloriesBurnedCalculator';
import ActivityForm from './ActivityForm';
import ActivityList from './ActivityList';
import GoalSettingForm from './GoalSettingForm';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [stepCount, setStepCount] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [activityList, setActivityList] = useState([]);
  const [goals, setGoals] = useState({
    stepGoal: 0,
    caloriesBurnedGoal: 0,
    activeMinutesGoal: 0,
  });

  const handleResetSteps = () => {
    setStepCount(0);
  };

  const handleCaloriesBurned = (calories) => {
    setCaloriesBurned(calories);
  };

  const handleActivityLogged = (activity) => {
    const caloriesBurned = activity.duration * activity.intensity; 
    const loggedActivity = { ...activity, caloriesBurned };
    setActivityList([...activityList, loggedActivity]);
  };

  const handleDeleteActivity = (index) => {
    const updatedActivityList = [...activityList];
    updatedActivityList.splice(index, 1);
    setActivityList(updatedActivityList);
  };

  const handleGoalSet = (goal) => {
    setGoals(goal);
  };

  const calculateProgress = (value, goal) => {
    if (goal === 0) return 0;
    const progress = (value / goal) * 100;
    return progress > 100 ? 100 : progress;
  };

  const stepProgress = calculateProgress(stepCount, goals.stepGoal);
  const caloriesBurnedProgress = calculateProgress(caloriesBurned, goals.caloriesBurnedGoal);
  const activeMinutesProgress = calculateProgress(activityList.length, goals.activeMinutesGoal);

  return (
    <Paper className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Steps Taken</Typography>
            <Typography variant="h4">{stepCount}</Typography>
            <Button variant="outlined" color="primary" onClick={handleResetSteps}>
              Reset
            </Button>
            <StepCounter stepCount={stepCount} setStepCount={setStepCount} />
            <LinearProgress variant="determinate" value={stepProgress} />
            <Typography variant="caption">{`${stepProgress}% of Goal`}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Calories Burned</Typography>
            <Typography variant="h4">{caloriesBurned}</Typography>
            <LinearProgress variant="determinate" value={caloriesBurnedProgress} />
            <Typography variant="caption">{`${caloriesBurnedProgress}% of Goal`}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Activity Log</Typography>
            <ActivityList activities={activityList} onDeleteActivity={handleDeleteActivity} />
            <LinearProgress variant="determinate" value={activeMinutesProgress} />
            <Typography variant="caption">{`${activeMinutesProgress}% of Goal`}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Goal Setting</Typography>
            <GoalSettingForm onGoalSet={handleGoalSet} />
            <Typography variant="body1">Step Goal: {goals.stepGoal}</Typography>
            <Typography variant="body1">Calories Burned Goal: {goals.caloriesBurnedGoal}</Typography>
            <Typography variant="body1">Active Minutes Goal: {goals.activeMinutesGoal}</Typography>
          </Paper>
        </Grid>
      </Grid>
      <CaloriesBurnedCalculator onCaloriesBurned={handleCaloriesBurned} />
      <ActivityForm onActivityLogged={handleActivityLogged} />
    </Paper>
  );
};

export default Dashboard;
