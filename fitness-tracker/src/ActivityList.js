import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const ActivityList = ({ activities, onDeleteActivity }) => {
  return (
    <List>
      {activities.map((activity, index) => (
        <ListItem key={index}>
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
