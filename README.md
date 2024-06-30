# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



# Features
## User Authentication:

    Sign In Page
    Sign Up Page
    Secure authentication using the ReqRes API

## Protected Dashboard:

    Accessible only to authenticated users
    Displays a list of users fetched from the ReqRes API

## State Management:

    Managed using Zustand for efficient and scalable state handling


## Styling:

    Tailwind CSS integration for modern and responsive UI


## Reusable Components:

    Common UI elements such as forms and modals
    Use of named slots to improve component reusability


## Middleware Protection:

    Route protection to ensure secure access to the dashboard


## Testing:

    Unit tests for critical parts of the application, such as authentication logic and HTTP service interactions
    TDD approach to maintain high code quality


## Technologies Used

    React (with TypeScript): A JavaScript library for building user interfaces
    Zustand: A state management solution
    Tailwind CSS: A utility-first CSS framework
    ReqRes API: A hosted REST-API for user authentication and data retrieval
    Jest: A testing framework for JavaScript
    @testing-library/react: A set of helpers for testing React components


# Project Structure

secure-user-management-dashboard/
├── src/
│   ├── components/         # Reusable components
│   ├── pages/              # Application pages (SignIn, SignUp, Dashboard)
│   ├── services/           # HTTP service for API interactions
│   ├── store/              # Zustand store for state management
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point of the application
│   ├── index.css           # Global CSS
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies and scripts
└── README.md               # Project description and instructions



# How to Use


## Sign Up:
    Navigate to the Sign-Up page to create a new account.
    Use a valid email and password to register.


## Sign In:
    Navigate to the Sign-In page to log in with your credentials.
    After successful authentication, you will be redirected to the protected dashboard.


## Dashboard:
    The dashboard displays a list of users fetched from the ReqRes API.
    Accessible only to authenticated users.


## Contributing
    Contributions are welcome! Please follow these steps to contribute:


# Fork the repository.
    Create a new branch (git checkout -b feature/YourFeature).
    Commit your changes (git commit -m 'Add some feature').
    Push to the branch (git push origin feature/YourFeature).
    Open a pull request.


# Contact
For any questions or suggestions, please feel free to reach out.