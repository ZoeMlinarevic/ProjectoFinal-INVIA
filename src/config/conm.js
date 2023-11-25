import dotenv from "dotenv";
dotenv.config();

import mysql2 from "mysql2";

const pool = mysql2.createPool({
    host: "mysql-andywclav.alwaysdata.net",
    user: "andywclav",
    password: "-WjnDy-!vj2PpBm",
    database: "andywclav_bd-invia",
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

const conn = pool.promise();

export { conn };