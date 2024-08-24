import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: "jay123",
  host: "localhost",
  port: 5432,
  database: "haqsarshak",
});

export default pool;
