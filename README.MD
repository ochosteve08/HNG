Certainly! Below is a structured `README.md` template for the CRUD API you've developed using Node.js, Express, and MongoDB:

---

## CRUD API for Person Resource

This API allows for the basic CRUD (Create, Read, Update, Delete) operations on a "Person" resource.

### Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [API Endpoints](#api-endpoints)
4. [Testing](#testing)
5. [Contributing](#contributing)
6. [License](#license)

### Installation

1. **Clone the Repository**

   ```bash
   git clone [https://github.com/ochosteve08/HNG.git]

   ```
2. **Install Dependencies**

   ```bash
   npm install
   ```
3. **Setup Environment Variables**

   Rename `.env.example` to `.env` and update the values:

   ```env
   MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
   PORT=3500
   ```
4. **Run the Server**

   ```bash
   npm run dev
   ```

### Usage

Once the server is up and running, you can access the API at:

http://localhost:3500/api

### API Endpoints

1. **Add a Person**

   - **Method**: `POST`
   - **Route**: `/api`
   - **Request Body**:
     ```json
     {"name":"glorious"}
     ```
   - **Response**:
     ```json
     {
         "name": "glorious",
         "_id": "650262b5420f620d558be6c4",
         "__v": 0
     }
     ```
2. **Read a Person**
 - **Method**: `GET`
   - **Route**: `/api/:userId`
   - **Response**:
     ```json
     {
         "_id": "65025d5e420f620d558be6c0",
         "name": "glorious",
         "__v": 0
     }
     ```
3. **Update a Person**

   - **Method**: `PUT`
   - **Route**: `/api/:userId`
   - **Request Body**:
     ```json
     "name":"mungo park"}
     ```
   - **Response**:
     ```json
     {
         "name": "mungo park",
         "_id": "650262b5420f620d558be6c4",
         "__v": 0
     }
     ```
4. **Delete a Person**

   - **Method**: `DELETE`
   - **Route**: `/api/:userId`
   - **Response**:
     ```json
     {
       "message": "Deleted Successfully"
     }
     ```

### Error Handling

1. **Error Response Format**:

   ```json
   {
     "error": "Detailed error message"
   }
   ```
2. **Common Errors**:

   - `400 Bad Request`: Invalid input or malformed request.
   - `404 Not Found`: The requested resource (person) was not found.
   - `500 Internal Server Error`: An unexpected error on the server side.

---

### Testing

For testing the API, you can use tools like [Postman](https://www.postman.com/).

### Contributing

If you'd like to contribute, please fork the repository, make your changes, and then submit a pull request. Ensure that your code has adequate coverage and maintains the existing coding style.

### License

MIT License. See the [LICENSE](LICENSE) file for details.

---
