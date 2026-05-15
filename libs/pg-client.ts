import { Client } from "pg";
export const client = await new Client({
  connectionString: process.env.NEON_URL,
}).connect();
