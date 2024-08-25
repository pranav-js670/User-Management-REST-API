# User-Management-REST-API

This project is a User Management REST API built using Node.js and Express.js, with MySQL as the database. The API allows for creating, reading, updating, and deleting user data and is designed to adhere to RESTful principles. The goal of this project is to provide a backend service that can manage user data efficiently, following the best practices of REST API design.

## What is a REST API ? 

A REST API (Representational State Transfer Application Programming Interface) is a set of rules and conventions for building and interacting with web services.

## Rules and Standards:

1. Correct Use of HTTP Methods: RESTful APIs use standard HTTP methods like GET (to retrieve data), POST (to create data), PUT (to update data), and DELETE (to delete data).
2. Resource-Based URLs: The URLs (or endpoints) represent resources (e.g., /users for users, /orders for orders).
3. Statelessness: Each request from the client to the server must contain all the information the server needs to fulfill that request. The server does not store session state between requests.
4. Status Codes: REST APIs use standard HTTP status codes to indicate the result of a request (e.g., 200 OK for success, 404 Not Found for a missing resource, 500 Internal Server Error for a server error).
5. Error Handling: RESTful APIs properly handle and return errors in a consistent and meaningful way.
6. Representation of Data: Data can be represented in different formats, such as JSON, XML, or plain text, but JSON is the most commonly used format.

## Technologies Used

1. Node.js
2. Express.js
3. MySQL
4. Postman 

## Features

1. CRUD Operations: The API supports Create, Read, Update, and Delete operations on user data.
2. MySQL Integration: User data is stored in a MySQL database, ensuring data persistence.
3. Error Handling: Robust error handling is implemented to manage various failure scenarios.
4. RESTful Design: The API follows RESTful principles, ensuring scalability and maintainability.

## License

This project is licensed under the MIT License.
