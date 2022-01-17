# Firebase Unichat

Welcome to the chat application powered by Firebase, React JS, and Chat Engine API. The features of this application includes realtime chat functionality, social authentication, image support, sound notifications, and the ability to create multiples chat rooms.

👉[View Deployed Project](https://firebase-unichat.netlify.app/)🚀 
 
## UX

### Developer's goal
- Learn to build a chat web application using React in the front end and Firebase serving the backend
- Gain practical knowledge in the best practices of using React to build reusable components
    + Objectives to be met includes:
        * Understanding of React Routing and React Context hooks
        * Firebase integration as database and for social authentication
        * Integration of Chat Engine REST API
        * Making REST API calls in react using Axios module
        * Using environment variables to hide sensitive data

### User Stories
- As a first time visitor, I want to receive notification confirming it is me siging up via the social authentication
- As regular user, I should be able to join a chat room, so that I can engaged with other users
- As the creator of a chat-room, I have the ability to add new users to the chat room, so they can participate in the activities
- All users should be able to view current status members in the current chat room joined

## Features
 
### Existing Features
- Social Authentication buttons - allows the users to login or sign-up via their google or facebook credentials
- Sound notifications - allows users, engaged in chats, to be alerted if activities are taking place in a chat room
- User Status - allows for users to view current status of participants in a chat room
- Avatar images - allows for users to view an image representation of chart participants
- My Chats Add Button - allows for the creation of chat rooms
- Log out button - allows for users to end their session

### Features Left to Implement
- Chat application needs to be adjusted for different device with media queries

## Technologies Used

- [CSS](https://www.w3schools.com/css/css_intro.asp)
    - The project uses **CSS** to style the web page.

- [HTML](https://www.w3schools.com/css/css_intro.asp)
    - The project uses **HTML** to construct the web page elements.

- [JavaScript](https://www.w3schools.com/js/js_intro.asp)
    - The project uses **JavaScript** to manipulate the DOM elements of the application.

- [React JS](https://reactjs.org/)
    - The project uses **React JS** to build reusable UI components to simplify scalability of the web app.

- [Chat Engine](https://chatengine.io/)
    - The **Chat Engine** API is used to build the Chat functionality of the web application.

- [Firebase](https://firebase.google.com/?gclid=Cj0KCQiAoY-PBhCNARIsABcz773A-bXdKNQCUUyOzVuLYuDWRCamvu0O7k0cwFPE_c2f_leufaF2ZY0aAqEDEALw_wcB&gclsrc=aw.ds)
    - **Firebase** is used as the backend for handling the social authentication of the app.

## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The boiler template to start the project was sourced from a [Github Repository (@alamore)](https://github.com/alamorre/unichat-course).

- The tutorial for completing the code along was offered by the [JavaScript Mastery YouTube channel](https://youtu.be/Bv9Js3QLOLY).


### Acknowledgements

- Thanks to the JavaScript Mastery YouTube channel, I have been able to expand my practical knowledge on using React to build awesome web apps.

