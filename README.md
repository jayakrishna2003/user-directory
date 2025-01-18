# Wisdom Peak Analytics Assignment Reference Document

## Objective 

The goal of this assignment is to create a functional React.js application that fetches and displays a list of users from an API.
The application should include features for searching, filtering, and viewing detailed information about each user.
The expected learning outcomes from this assignment include understanding how to integrate APIs in a React application,
managing state using either React Context API or Redux, handling asynchronous data fetching with loading and error states,
and implementing responsive design with optional dark/light mode toggle.


# Step-by-Step Instructions

## 1. Project Setup and Initialization
## Set up the project directory:

   i) Create a new directory for your project and navigate into it.
   ii)Initialize a new React project using Create React App:
   
         npx create-react-app user-directory
         
   iii)Navigate into the project directory:
   
         cd user-directory

## Install necessary dependencies:


   i) React Router for navigation:
   
        npm install react-router-dom
        
   ii) For state management (choose one):
   
    React Context API (Builtin, no installation needed)

## 2. Development Process
## Home Page Setup:

  i) Create a Home.js component.
  ii) Fetch the list of users from the API: https://jsonplaceholder.typicode.com/users
  iii) Display the users with their name, email, and city.
  iv) Implement a search bar to filter users by name.
  v) Implement sorting functionality for the user list (A-Z, Z-A).
  vi) Ensure that clicking on a user navigates to their detail page.

## User Detail Page:

  i) Create a UserDetail.js component.
  ii) Fetch and display full user details (name, email, phone, company name, website).
  iii) Include a "Go Back" button to return to the home page.

## State Management:

  i) If using React Context API:
        Set up a context provider to manage global state.
        Use the context in your components to manage user data and application state.
  ii) If using Redux:
        Set up Redux store, actions, and reducers.
        Connect your components to the Redux store.

## Bonus Features:

   Implement a dark/light mode toggle.

# To run code 

    npm start

  
