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
        * Making REST API calls in React using Axios module
        * Using environment variables to hide sensitive data

### User Stories
- As a first time visitor, I want to receive notification confirming it is me signing up via the social authentication
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

### Bugs Found During Coding

- When testing the google social login for the first time no logout button was seen along with the expected page title
    - Upon logging in screen only showed a white screen with a welcome message and an animated icon of a hand during development stage of the React server
    - Ended the local server with `ctrl + c`, cleared all browsing history and data within 24 hours, and checked Chat.js component
    - Issue was resolved by moving `<ChatEngine height="calc(100vh-66px)" />` outside the div containing the logout button
- When testing facebook social login, there was a message prompt showing that the App was being accessed from an unsecure server and that the facebook authentication security settings needed to be updated for the app.
    - To resolve this, all **Client OAuth settings** in the facebook app as *unichatmessenger* was updated to yes under the Facebook Login settings section (except for `Force Web OAuth reauthentication`).
    - Previous step did not resolve the situation after running local development server with `npm start`.
    - Next action taken was by making local server run as ***https*** protocol instead of ***http***.
        - This was accomplished by following a YouTube video tutorial to create an SSL ticket for localhost 
            - [Setup HTTPS in Development With Create React App](https://www.youtube.com/watch?v=neT7fmZ6sDE)
        - This resolved the situation after confirming the login of the facebook social authentication on local development environment

### Cross-platform Compatibility

- Launching the chat application function as it should on Chrome and Microsoft Edge
- The chat app failed device responsiveness test for different screen sizes on both platform
    - Need to implement media queries to resolve the issue



### UX tests

- User first visit to the website:
    - Chooses one of the social login option
    - User gets prompt message to confirm if he or she is the actual personnel logging into the application
    - Upon entering wrong credentials, user is reported to have the wrong access to their site and is redirected back to the homepage

- Upon successful login:
    - user is able to view active chat rooms 
    - user creates a chatroom successfully when the add button is selected
        - creator of a chatroom adds new user participant successfully
            + all chatroom participants are able to view each other's avatar, email ID, and current status
        - sound notification activates while user is away from current chatroom activity



## Deployment

### Localhost Environment
1. Log in to GitHub and locate the GitHub repository of the project
2. At the top of the repository page, select code and click "Clone or download".
    1. To clone the repository using HTTPS
        1. Under "Clone with HTTPS", copy the link
        2. Open Git Bash
        3. Change the current working directory to the location where you want the cloned directory to be made.
        4. Type git clone, and then paste the URL you copied in previous the step
        
        ```$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY```
        5. Press Enter. Your local clone will be created.
    2. Selecting the download option
        1. click `Download Zip`
        2. Extract the project files from the zip file when you right click on it
        3. You will now have access to the project files
3. Open Git Bash and navigate to the root directory of the project
4. Run `npm install` to install all the project modules and dependencies. (Note that you should have [NodeJS](https://nodejs.org/en/) installed to be running the npm command)
5. When completed run `npm start` to start up the local server with the url
6. Navigate to the localhost url for the React application (usually @ http://localhost:3000), in order to launch it
7. Note 

### Hosting on Netlify

1. After following steps 2 to 4, to download the project files on to your local PC
2. Open Git Bash and navigate to the root directory of the project
3. Run `npm build` to build an optimized version of the chat app for deployment
4. Sign up for [Netlify](https://www.netlify.com/)
5. Drag and drop the build file of your project into a new netlify project when you are all signed up
6. After completing the previous steps you will have everything with a URL where the project is being hosted



## Credits

### Content
- The boiler template to start the project was sourced from a [Github Repository (@alamore)](https://github.com/alamorre/unichat-course).

- The tutorial for completing the code along was offered by the [JavaScript Mastery YouTube channel](https://youtu.be/Bv9Js3QLOLY).


### Acknowledgements

- Thanks to the [JavaScript Mastery YouTube channel](https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A), I have been able to expand my practical knowledge on using React to build awesome web apps.

