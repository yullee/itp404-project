[![Build Status](https://travis-ci.org/yulleeki/itp404-final-project.svg?branch=master)](https://travis-ci.org/yulleeki/itp404-final-project)

ITP 404 Final Project : Premier League

- I have built my own API to create this project.
Created a restful API with node, express, sequelize and mysql
http://itp404-premier-league.herokuapp.com/api

- About the page
    /
    Addon: Has a unique title, About

- Post a review on their team
    /posts
    AJAX request: Get, Post, Put, Delete requests
    This route is based on http://localhost:3000/api/posts.
    Addon: Has a unique title, Rating
    Toastr: A success notification when successfully created, updated, or deleted. An error notification when a call fails.

- Search for team schedules
    /searches
    Addon: Has a unique title, Search

- Schedule results
    /searches/schedules
    AJAX request: Get request
    This route is based on http://itp404-premier-league.herokuapp.com.
    Addon: Has a unique title, Schedule
    If no search result is found, the message appears on the page.
    Use Momentjs to sort the schedule results from latest to earliest date

- Send a message to EPL
    /contacts
    AJAX request: Get and Post requests
    This route is based on http://localhost:3000/api/contacts.
    Addon: Has a unique title, Contact
    Toastr: A success notification when successfully created. An error notification when a call fails.

- Loading and error indicators.

- All 77 tests have passed.
    Three integration tests
    Index-counter-test: Helps to count the index number; Test if the return index value is same as expected.
    Make-bold-test: Test if return the correct string, not <b>1234</b>
    Relative-time-test: Test if return a correctly computed value
    Three acceptance tests
    Post-test: Test if the review form is created successfully
    Search-test: Test if the URL correctly reflects the search input
    Contact-test: Test if the contact form is sent successfully
