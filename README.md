
# Fullstack CRUD App

This is a fullstack CRUD (Create, Read, Update, Delete) application that uses React for the frontend and Spring Boot for the backend. The app allows you to perform CRUD operations on a list of users.

## Technologies Used

### Frontend
- React (using Create React App)
- Axios (for HTTP requests)

### Backend
- Spring Boot
- Spring Data JPA
- MySQL

## Features
- Add a new user
- View all users
- Edit user details
- Delete user

## Prerequisites

Before running the app, make sure you have the following installed:

### Frontend
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Backend
- [Java JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [MySQL](https://www.mysql.com/)

## Getting Started

Follow these steps to run both the backend and frontend locally.

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

### 2. Set Up the Backend

#### 2.1. Set Up MySQL Database

1. Create a new database in MySQL:

```sql
CREATE DATABASE crud_app;
```

2. Update the `application.properties` in `src/main/resources` with your MySQL credentials:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/crud_app
spring.datasource.username=your-username
spring.datasource.password=your-password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.show-sql=true
```

#### 2.2. Run the Backend

1. Open a terminal and navigate to the backend directory:

```bash
cd backend
```

2. Build and run the Spring Boot app:

```bash
./mvnw spring-boot:run
```

Your backend should now be running at `http://localhost:8080`.

### 3. Set Up the Frontend

#### 3.1. Install Dependencies

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install the required dependencies:

```bash
npm install
```

#### 3.2. Run the Frontend

1. Start the React app:

```bash
npm start
```

Your frontend should now be running at `http://localhost:3000`.

### 4. Access the App

- Open your browser and go to `http://localhost:3000` to access the frontend.
- The app will communicate with the backend running at `http://localhost:8080`.

## API Endpoints

### User Operations

- **GET** `/users` - Retrieve all users
- **POST** `/user` - Create a new user
- **GET** `/user/{id}` - Retrieve a user by ID
- **PUT** `/user/{id}` - Update an existing user
- **DELETE** `/user/{id}` - Delete a user by ID

## Folder Structure

### Frontend (React)
```
frontend/
├── public/
├── src/
│   ├── components/      # React components
│   ├── App.js           # Main app component
│   ├── index.js         # Entry point
│   └── ...
└── package.json         # Dependencies and scripts
```

### Backend (Spring Boot)
```
backend/
├── src/
│   ├── main/
│   │   ├── java/com/xjohnsondev/fullstack_backend/
│   │   │   ├── controller/       # REST controllers
│   │   │   ├── model/            # JPA models (entities)
│   │   │   ├── repository/       # Spring Data JPA repositories
│   │   │   └── ...
│   └── resources/
│       ├── application.properties # Database and server configuration
│       └── ...
├── pom.xml                    # Project dependencies
```
## Troubleshooting

- **CORS Issues**: Make sure you have CORS configured correctly in your Spring Boot application to allow communication between the React frontend and the Spring Boot backend.
  
  You can do so by adding a `WebConfig` class like this:

  ```java
  @Configuration
  public class WebConfig implements WebMvcConfigurer {
  
      @Override
      public void addCorsMappings(CorsRegistry registry) {
          registry.addMapping("/**")
                  .allowedOrigins("http://localhost:3000")  // Allow frontend origin
                  .allowedMethods("GET", "POST", "PUT", "DELETE")  // Allow specific methods
                  .allowedHeaders("*")  // Allow all headers
                  .allowCredentials(true);  // Allow credentials (cookies, etc.)
      }
  }
  ```

## Contributing

If you'd like to contribute to the project, feel free to submit a pull request. Please follow the existing coding style and conventions. Ensure that your changes are well-documented and tested.
