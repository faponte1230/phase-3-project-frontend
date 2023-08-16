# Gym RATE
Gym RATe is a full stack application that utilizes a React frontend and a Ruby backend. This application allows the user to add their own gym to the database. Once the gym is added to the database, a user may also leave a review on the gym's review page.

# Technologies Used
Ruby
ActiveRecord
Sinatra
React.js
React Router

# Installation
Once both repositories are locally installed and opened on your machine, run '$bundle install' in the backend repo ternmial to install all the backend dependencies for the application. Do the same for the frontend repo, but run '$npm install' instead to download all the frontend dependencies.
After the dependencies are installed, seed the database by running bundle exec rake db:seed in the backend terminal.
Then start the server by running '$bundle exec rake server'
Start the application by running '$npm start' in the frontend repo terminal. After this you are all set to start using the application!

# UI
The user is able to add gyms to the database through a controlled form.
When adding a gym, the user will input the name, location, image URL, number of gyms, and membership price. This will be sent to backend via a POST request.

The user can make a review for newly added gyms and pre-existing gyms through a controlled form. This will be sent to the backend via a POST request.

The user may edit the gyms that are currently in the database as well as delete them. These edits are then sent back to the database via a PATCH and DELETE request.

While the backend database is updated, the frontend will update in response to the changes made by its HTTP requests made possible with routes defined in the backend application controller.

# Project Requirements
This project:
Uses ActiveRecord to interact with a SQLite database
Uses a database with a one-to-many relationship
Allows all gym full CRUD and reviews to have CR&D functionality
Only relys on one initial GET request to get the data from the database
Follows RESTful conventions