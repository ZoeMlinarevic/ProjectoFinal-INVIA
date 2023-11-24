import dotenv from "dotenv";
dotenv.config();

import mysql2 from "mysql2";

const pool = mysql2.createPool({
    host: process.env.MYSQL_DB_HOST,
    user: process.env.MySQL_DB_USER,
    password: process.env.MySQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_DATABASE,
    port: process.env.MYSQL_DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

const conn = pool.promise();

export { conn };