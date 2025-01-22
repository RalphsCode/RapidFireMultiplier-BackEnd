require("dotenv").config(); // Load environment variables from .env file

let DB_URI;

if (process.env.NODE_ENV === "development") {
  DB_URI = process.env.TEST_DB_URI;
} else {
  DB_URI = process.env.DATABASE_URL;
}

/** Database setup for users. */

const { Client } = require("pg");

let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;