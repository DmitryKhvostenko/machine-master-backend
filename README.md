# Machine Master Backend

Welcome to the Machine Master Backend repository. This project is a RESTful API for managing machine repairs. It provides endpoints for creating, retrieving, updating, and deleting machines and repair records.

## Demo

You can access the live demo of the API here: [Machine Master Backend](https://machine-master-backend.onrender.com/)

## API Documentation

The full API documentation is available via Swagger: [API Docs](https://machine-master-backend.onrender.com/api-docs)

## Features

- Manage machine details
- Track and manage repair records
- Secure authentication with JWT tokens

## Endpoints

### Auth

- **POST /auth/login**
  - Authenticate and receive a JWT token

### Machine

- **POST /machine**
  - Create a new machine and repair record
- **GET /machine/all**
  - Retrieve all preview machines

### Repair

- **GET /repair-types**
  - Get all repair types
- **GET /repair/all-prev**
  - Get all preview repairs
- **GET /repair/{id}**
  - Get repair details by ID
- **DELETE /repair/{id}**
  - Delete a repair by ID

## Security

All endpoints, except for `/auth/login`, require a valid JWT token in the `Authorization` header.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository
    ```sh
    git clone https://github.com/DmitryKhvostenko/machine-master-backend.git
    ```

2. Install dependencies
    ```sh
    npm install
    ```

3. Start the server
    ```sh
    npm start
    ```

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.
