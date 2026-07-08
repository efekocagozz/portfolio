import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "banking-app",
    title: "Banking App",
    description: "Full-stack banking application with account management and transaction processing.",
    longDescription:
      "A collaborative school project building a full-stack banking application. Covers core banking features including account creation, balance tracking, and transaction history — with a structured backend and relational database design.",
    tech: ["Java", "Spring Boot", "H2", "REST APIs", "JPA/Hibernate"],
    github: "https://github.com/RashidIsmayilzada/Banking-App",
    gradient: "from-indigo-600 via-indigo-500 to-violet-500",
    status: "production",
  },
  {
    id: "nosql-ticket-system",
    title: "Ticket Management System",
    description: "Hybrid NoSQL/SQL ticket management platform built with MongoDB and relational databases.",
    longDescription:
      "A ticket management system exploring hybrid database architecture — MongoDB for flexible document storage of ticket data alongside a relational SQL layer for structured reporting. Built as a deep dive into NoSQL design patterns and data modelling trade-offs.",
    tech: ["MongoDB", "SQL", "C#", "NoSQL", "REST APIs"],
    github: "https://github.com/DarlingtonJones24/NOSQLDatabaseProject",
    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
    status: "production",
  },
  {
    id: "restaurant-ordering",
    title: "Restaurant Ordering System",
    description: "Digital ordering and kitchen management system for restaurant operations.",
    longDescription:
      "A group project building a restaurant ordering platform where customers can place orders and kitchen staff manage fulfilment in real time. Focused on clean data flow between front-of-house ordering and back-of-house processing.",
    tech: ["C#", "SQL", "REST APIs"],
    github: "https://github.com/OdunayoAA/Project-1.4-group-5",
    gradient: "from-blue-600 via-indigo-500 to-violet-500",
    status: "production",
  },
  {
    id: "someren",
    title: "Someren",
    description: "Accommodation and activity management system for a student summer camp.",
    longDescription:
      "A school management application for the Someren summer retreat — handling cabin assignments, activity scheduling, and participant tracking. Built with a focus on clean relational data modelling and CRUD operations.",
    tech: ["C#", ".NET", "SQL Server", "WinForms"],
    github: "https://github.com/wesleyjv/Someren",
    gradient: "from-emerald-600 via-teal-500 to-cyan-500",
    status: "archived",
  },
  {
    id: "trading-tools",
    title: "Solana Trading Bots",
    description: "Trading bots on Solana leveraging flash loans for on-chain arbitrage strategies.",
    longDescription:
      "A personal project building trading bots on the Solana blockchain that leverage flash loans — borrowing and repaying within a single transaction to execute arbitrage strategies. Built to explore on-chain mechanics, smart contract interactions, and real-time execution on a high-speed chain.",
    tech: ["Solidity", "TypeScript", "Solana", "Web3", "Flash Loans"],
    github: "https://github.com/efekocagozz",
    gradient: "from-amber-600 via-orange-500 to-red-500",
    status: "wip",
  },
];
