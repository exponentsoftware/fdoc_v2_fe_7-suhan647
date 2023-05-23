import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    "&:last-child": {
      borderBottom: "none"
    }
  }
}));

const ActivityList = ({ activities, onDeleteActivity }) => {
  const classes = useStyles();

  return (
    <List>
      {activities.map((activity, index) => (
        <ListItem key={index} className={classes.listItem}>
          <ListItemText
            primary={activity.activityType}
            secondary={`Duration: ${activity.duration} minutes, Intensity: ${activity.intensity}, Calories Burned: ${activity.caloriesBurned}`}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onDeleteActivity(index)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ActivityList;
