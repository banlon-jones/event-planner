# Event Management Application

## Overview
This is a React-based Event Management Application that allows users to create, edit, and manage events. It includes features such as user authentication, event booking, and admin functionality for managing events. The application is designed with a focus on scalability, maintainability, and user experience.

---

## Instructions to Run/View the Application

### Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)

### Steps to Run the Application
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/banlon-jones/event-planner.git
   cd ./event-planner

2. **Install Dependencies**:
   ```bash
   npm install
   
3. **Run the Application**:
   ```bash
   npm run dev
   
4. **View the Application**:
 Open the application in your browser at http://localhost:5173

<hr>

## Architectural Decisions

### Data Management

Redux Toolkit: Used for state management to handle global application state, such as user authentication and event data. Redux was chosen for its predictable state container and ease of debugging.

LocalStorage: Used for persisting event data locally. This decision was made to simplify the application and avoid the need for a backend during development.

### Separation of Admin Functionality

Admin functionality (e.g., editing and deleting events) is separated by checking the uid of the logged-in user. Only the event creator can edit or delete their events.

This separation ensures that regular users cannot modify events they do not own.

### Component Design

The application is built with reusable components (Event, CreateAndEditEvent, SignInAndSignUp) to ensure modularity and maintainability.

Dialogs are used for actions like booking events and editing event details to enhance user experience.

<hr>

### Libraries and Tools Used

**React :** Core framework for building the user interface.

**React-Redux :** For state management, ensuring a predictable and centralized state.

**React Hook Form :** For form handling, providing a simple and performant way to manage form state and validation.

**Firebase:** Used for user authentication (onAuthStateChanged) to manage user sessions.

**PrimeReact**: For UI components like dialogs, enhancing the visual appeal and functionality.

**React Icons:** For adding icons to improve the user interface.
**Tailwind CSS:** For styling, chosen for its utility-first approach and rapid development capabilities.

<hr>

### Seniority Level and Justification
**Seniority Level**: senior-Level Developer


### Justification for Complexity and Choices
The application is designed with a balance between simplicity and scalability. It avoids over-engineering by using LocalStorage for data persistence while leveraging Redux for state management.
The use of Firebase for authentication simplifies user management without requiring a custom backend.

The modular component structure and use of libraries like React Hook Form and PrimeReact ensure maintainability and a good developer experience.
The separation of admin functionality demonstrates an understanding of role-based access control, which is essential for real-world applications.
This approach reflects a senior-level developer's ability to make pragmatic decisions, balancing complexity with the application's requirements.

