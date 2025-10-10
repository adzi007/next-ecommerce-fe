import axios from "axios";

// Default: call Next.js API routes (internal proxy)
export const api = axios.create({
  baseURL: "/api", // proxy to Next.js API routes
});

// External backend API (e.g., your microservice or REST API)
export const externalApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Used for client requests to Next.js API routes (internal)
export const internalApi = axios.create({
  baseURL: "/api",
});