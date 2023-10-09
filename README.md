# HabitTrackerApp
A full stack web application using node and ejs where users can add habits and track them.

### Features
- Multiple habits can be added and tracked.
- Each habit is tracked everyday with 3 status
  - Done - Mark the habit as done for a day
  - Not done - Mark the habit as not done for a day
  - None - User did not take any action on a habit for a day
- Views
  - A view to show all current habits. Here add button has been added to add multiple habits
  - A view to display 7 days of each habit
- Status of habit
 - today as well as last 6 days status is shown
 - user can toggle between status of the habit anytime

## HOW TO SETUP PROJECT

Follow given steps to run this project on your local machine

1. clone this repository

```$ git clone https://github.com/keshavkumar4699/habit-tracker-app```

2. Install required dependencies

```$ npm install```

3. Set port env variables

```$ set PORT=<port_number>```

4. Start application

```$ npm start```

5. Open application in browser

```$ http://localhost:<PORT>```

## FOLDER STRUCTURE
```
project
│   README.md
│   index.js
|   package.json    
│
└───models
|   │   habit_list.js
|   │   habit_status.js
|
└───views
│   │   add_status.ejs
│   │   detail_view.ejs
|   |   layout.ejs
|   |   update_status.ejs
|   |   week_view.ejs
│   │
│   └───includes
│       │   _addhabit.ejs
│       │   _header.ejs
|       |   _sidebar.ejs
|
└───controllers
|   │   habit_controller.ejs
|   │   index_controller.ejs
|   |   status_controller.ejs
|
└───config
|   │   mongoose.ejs
|
└───routes
|   │   habit_router.js
|   │   index_router.js
|   │   status_router.js
|
└───assets
│   │   
│   └───css
│   |   │ add_status.css
│   |   │ add-habit.css
│   |   │ detail_view.css
│   |   │ header.css
│   |   │ layout.css
│   |   │ month_view.css
│   |   │ update_status.css
│   |   │ week_view.css  
|   |
│   └───scss
│   |   │ add_status.scss
│   |   │ add-habit.scss
│   |   │ detail_view.scss
│   |   │ header.scss
│   |   │ layout.scss
│   |   │ month_view.scss
│   |   │ update_status.scss
│   |   │ week_view.scss
|   |
│   └───js
│       │ add_status.js 
│       │ detail_view.js
│       │ header.js
│       │ update_status.js
│       │ week_view.js
```

## FURHTER IMPROVEMENTS
1. streak
2. best streak
3. total no of days task done
4. mark favorites