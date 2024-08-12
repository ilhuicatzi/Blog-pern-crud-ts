import pg from "pg";

export const pool = new pg.Pool({
  port: 5432,
  host: "localhost",
  user: "ilhuicatzi",
  password: "ilhuicatzi.root",
});

pool.on("connect", () => console.log("Database connection established"));
