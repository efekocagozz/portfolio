import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "banking-app",
    title: "Banking Application",
    kind: "team",
    description:
      "A banking app where customers manage accounts and admins keep everything in check, built with a team of four.",
    highlights: [
      "Built the REST API behind the admin panel",
      "Designed login and role-based access, so every user only sees what they should",
      "Added rate limiting, API documentation and automated tests",
    ],
    learned:
      "How to build and ship a Spring Boot app with CI/CD and Docker, and how to test it properly with JUnit, Mockito and an H2 test database.",
    github: "https://github.com/RashidIsmayilzada/Banking-App",
  },
  {
    id: "sportsmeet",
    title: "SportsMeet",
    kind: "personal",
    description:
      "A web app for finding and joining local sports events in the Netherlands, built solo as a full-stack project, from the database to the interface.",
    highlights: [
      "Built a REST API in PHP with login, admin and user roles, and an approval flow for join requests",
      "Added notifications and live weather for each event",
      "Designed the frontend as reusable components (atoms to organisms) documented in Storybook, and ran everything with Docker Compose",
    ],
    learned:
      "JWT authentication for the first time, how to structure an API into controllers, services and repositories, and how to document it with OpenAPI and Swagger.",
    github: "https://github.com/efekocagozz/sportsmeet-v2",
  },
  {
    id: "incident-management",
    title: "Incident Management System",
    kind: "team",
    description:
      "A service-desk tool where employees report IT incidents and the service desk follows them up until they're resolved. I built most of it, mainly the backend.",
    highlights: [
      "Built the backend: ticket handling with priorities, statuses and filtering, plus a REST API documented with Swagger",
      "Designed the data as documents, so each ticket holds its own comments and employee info in MongoDB",
      "Built the statistics dashboard with MongoDB aggregations",
      "Secured accounts with hashed passwords, cookie login and separate employee and service-desk roles",
    ],
    learned:
      "How to model data as documents instead of tables, and when embedding beats referencing.",
    github: "https://github.com/DarlingtonJones24/NOSQLDatabaseProject",
  },
  {
    id: "restaurant-ordering",
    title: "Restaurant Ordering System",
    kind: "team",
    description:
      "A restaurant app that follows an order from the table to the kitchen to the bill, with a different screen for each staff role. I built the employee side.",
    highlights: [
      "Built employee management: add, edit and remove staff, with four roles (waiter, bartender, chef, manager)",
      "Built the login with hashed passwords, and sent each role to its own dashboard",
      "Kept business logic separate from data access with controllers, services and repositories",
      "Stored the data in a relational SQL Server database (hosted on Azure during the project), queried with plain SQL",
    ],
    learned:
      "How to keep logic out of controllers by splitting an app into controllers, services and repositories, how to handle logins and roles safely, and how to write SQL by hand and keep it safe from injection.",
    github: "https://github.com/efekocagozz/RestaurantOrderingSystem",
  },
];
