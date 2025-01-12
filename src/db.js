import sqlite3 from "sqlite3";
const { Database } = sqlite3;
const db = new Database(":memory:");

db.run(`
    CREATE TABLE users (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       username TEXT UNIQUE,
       password TEXT
    )
    `);

db.run(`
    CREATE TABLE todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    task TEXT,
    completed BOOLEAN DEFAULT 0,
    FOREIGN KEY(user_id) REFERENCES users(id)
    )
    `);

export default db;
