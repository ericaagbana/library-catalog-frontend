# library_Catalog-frontend
Frontend for a Digital Library Catalogue System, built with HTML, CSS, and JavaScript, featuring user authentication UI, responsive design, and API integration.

 A Digital Library Catalogue System – Frontend

This repository contains the the frontend implementation of the project, **"Digital Library Catalogue System**", a web-based application that allows users to browse or search books, register, log in, and interact with a digital library interface.

The frontend is built using **_HTML_, _CSS_, and _JavaScript_**, and it communicates with a separate **_Node.js + PostgreSQL backend API_**.


**Project Overview**
The Digital Library Catalogue System frontend provides:

 1. User-friendly interfaces for **login and registration**
 2. A **catalogue dashboard** for browsing available books
 3. A responsive layout suitable for desktop and mobile screens
 4. Integration with backend APIs for authentication and data retrieval

This repository focuses only on client-side functionality.

**Features**

          1. User Interface
- A Clean, simple and intuitive design
- A responsive layout using modern CSS
- Profile dropdown menu with logout option

       2. Authentication Pages

- User registration page
- User login page
- Token-based authentication handled via API calls

      3. Book Catalogue

- Display of books fetched from the backend
- Book categories and layout sections
- Featured books 

      4. Backend Integration

- Communicates with backend using `fetch()`
- API-based login and registration
- Dynamic rendering of user data (e.g. username)



## Technologies Used

    **Frontend Stack**

- HTML
- CSS
- JavaScript (Vanilla JS / ES6)
- Fetch API

### Tools

- Git & GitHub
- Browser Local Storage (temporary session handling)
  
API endpoints used include:

- `/api/auth/login`
-  `/api/auth/register`
- `/api/books`

  ## Login Details

      ## Admin Account 
Email: admin@library.com  
Password: admin123  
Role: Admin has Full access (book & user management)

    ## Student Account
Email: student@library.com  
Password: student123  
Role: Browse & borrow books

(Students can also register new accounts through the application)

# Notes

* This repository contains **frontend code only**
* Database logic and authentication security are handled in the backend

# References

This project was developed using the following resources:

React and UI Inspiration

Library layout referenced from Dribbble:
https://dribbble.com/shots/17210678-Library-Catalogue

Documentation & Tutorials

MDN Web Docs – JavaScript, Fetch API, DOM:
https://developer.mozilla.org/

W3Schools – HTML, CSS, JavaScript examples:
https://www.w3schools.com/

Express.js official documentation:
https://expressjs.com/

PostgreSQL official documentation:
https://www.postgresql.org/docs/

Render deployment guide:
https://render.com/docs

GitHub Pages documentation:
https://docs.github.com/pages

##  Author

**Erica Dzifa Agbana**
Computer Science Student | Academic City University
GitHub: [https://github.com/ericaagbana](https://github.com/ericaagbana)
