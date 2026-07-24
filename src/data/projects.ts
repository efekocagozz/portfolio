import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "banking-app",
    title: "Banking Application (Team Project)",
    description: "Full-stack banking application with a Spring Boot backend, Vue.js frontend, and JWT authentication.",
    longDescription:
      "Collaborated in a team of four to develop a full-stack banking application with a Spring Boot backend and Vue.js frontend. Designed and implemented RESTful APIs for admin panel. Implemented authentication and role-based authorization using Spring Security and JSON Web Tokens (JWT)s. Documented and tested API endpoints using OpenAPI (Swagger UI). Wrote unit and functional tests using. Collaborated using Git and GitHub in an agile team environment.",
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "Vue.js 3",
      "H2",
      "JWT",
      "Docker",
      "Railway",
      "Maven",
      "Swagger",
      "Bucket4j",
      "JUnit",
      "Mockito",
      "AssertJ"
    ],
    github: "https://github.com/RashidIsmayilzada/Banking-App",
    gradient: "from-indigo-600 via-indigo-500 to-violet-500",
    status: "production",
  },
  {
    id: "sportsmeet",
    title: "SportsMeet (Personal Academic Project)",
    description: "A web application that allows users to create and join local sports events.",
    longDescription:
      "Designed and developed a web application that allows users to create and join sports events in their city. Frontend uses Vue 3, Vite, Pinia, Vue Router, Axios, and Tailwind CSS. Developed a custom PHP REST API. Implemented JWT-based authentication and authorization. Designed and integrated an SQLite database for persistent data storage. Containerized both the frontend and backend using Docker.",
    tech: [
      "PHP",
      "Vue 3",
      "Vite",
      "Pinia",
      "Vue Router",
      "Axios",
      "Tailwind CSS",
      "Storybook",
      "JWT",
      "SQLite",
      "Docker"
    ],
    github: "https://github.com/efekocagozz/sportsmeet-v2",
    gradient: "from-blue-600 via-sky-500 to-cyan-400",
    status: "production",
  },
  {
    id: "incident-management",
    title: "Incident Management System (Team Project)",
    description: "An incident management system for tracking and managing support tickets, built with ASP.NET Core 8 and MongoDB.",
    longDescription:
      "Collaborated in a team to develop an incident management system for tracking and managing support tickets. Built the application using ASP.NET Core following the MVC architectural pattern. Integrated MongoDB Atlas using the official MongoDB .NET Driver for persistent data storage. . Developed ticket management features including CRUD operations, priority levels, filtering, and dashboard statistics. Integrated Swagger/OpenAPI documentation for API testing and development. ",
    tech: [
      "C#",
      "ASP.NET Core",
      "MongoDB Atlas",
      "Razor Views",
      "MVC",
      "Repository Pattern",
      "Service Layer",
      "BCrypt",
      "Cookie Authentication",
      "Swagger",
      "SMTP"
    ],
    github: "https://github.com/DarlingtonJones24/NOSQLDatabaseProject",
    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
    status: "production",
  },
  {
    id: "restaurant-ordering",
    title: "Restaurant Ordering System (Team Project)",
    description: "A restaurant ordering and management web application built with ASP.NET Core MVC.",
    longDescription:
      "Collaborated in a team to develop a restaurant ordering and management web application using ASP.NET Core MVC. Built features for order, menu, table, employee, and payment management. Implemented a layered architecture using the MVC pattern, Repository Pattern, and Service Layer to separate business logic from data access. Worked with SQL Server and Azure SQL.",
    tech: [
      "C#",
      "ASP.NET Core ",
      "SQL Server",
      "Azure SQL",
      "Razor Views",
      "MVC",
    ],
    github: "https://github.com/efekocagozz/RestaurantOrderingSystem",
    gradient: "from-blue-600 via-indigo-500 to-violet-500",
    status: "production",
  }
];
