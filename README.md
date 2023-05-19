## Fitness Tracker App Challenge

### Release 1: Basic Functionality

1. Design the user interface:
   - Create a `Dashboard` component that displays an overview of the user's fitness activities.
   - Include sections for steps taken, calories burned, and active minutes.
   - Implement a navigation bar component to switch between different views.

2. Implement step tracking functionality:
   - Create a `StepCounter` component that tracks the number of steps taken.
   - Display the step count on the `Dashboard` component.
   - Implement a button or functionality to reset the step count.

3. Track calories burned:
   - Add a `CaloriesBurnedCalculator` component that calculates the number of calories burned based on the user's activities.
   - Display the total calories burned on the `Dashboard` component.

### Release 2: Activity Logging

1. Implement activity logging functionality:
   - Create an `ActivityForm` component for users to log their activities.
   - Include fields for the activity type (e.g., running, cycling, weightlifting), duration, and intensity.
   - Store the logged activities in a list in the application state.

2. Display logged activities:
   - Create an `ActivityList` component that renders the logged activities on the `Dashboard`.
   - Display each activity's type, duration, intensity, and calories burned.
   - Allow users to delete logged activities if needed.

### Release 3: Goal Setting and Progress Tracking

1. Set fitness goals:
   - Implement a `GoalSettingForm` component where users can set goals for steps, calories burned, or active minutes.
   - Store the goals in the application state.

2. Track progress towards goals:
   - Display progress bars or visual indicators on the `Dashboard` to show the user's progress towards their set goals.
   - Update the progress indicators based on the logged activities and tracked data.

3. Provide insights and recommendations:
   - Analyze the user's fitness data and provide personalized insights and recommendations.
   - Display tips or suggestions for improving fitness based on the user's activity history.

Guidelines:
- Use React functional components and hooks (e.g., useState, useEffect) for building the user interface and managing state.
- Utilize React Router for navigation between different views, such as the `Dashboard`, `ActivityForm`, and `GoalSettingForm`.
- Store the fitness data, logged activities, and goals in a state management tool like Redux or the React Context API.
- Consider using a UI library like Material-UI, Ant Design, or React Bootstrap for enhanced visual components.
- You can use libraries like Mirage JS (https://miragejs.com/) to create a mock API server. Configure the mock server to handle the defined endpoints and return mock data when requests are made.
- Use Axios or Fetch API to interact with a mock API or server for data fetching and manipulation.
- Provide clear instructions on how to run the application and any necessary setup steps in the documentation.
