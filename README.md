# HabitTrackerApp
A habit tracker app, where we can define habits and track them. A fullstack app with Nodejs and Ejs.

## HOW TO SETUP PROJECT
1. install packages with npm i
  dotenv
  ejs
  express
  express-ejs-layouts
  mongoose
  node
  nodemon
  sass
2. set port env variable
3. run script to start -> npm start

## FOLDER STRUCTURE
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

## FURHTER IMPROVEMENTS
1. streak
2. best streak
3. total no of days task done
4. mark favorites