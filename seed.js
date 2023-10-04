import fs from 'fs';
import path from 'path';
import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Pawnee225',
    database: 'employee_tracker',
});

const sqlFilePath = 'E:\\Docs\\Employee Tracker\\seeds.sql';

const sql = fs.readFileSync(sqlFilePath, 'utf-8');

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the employee tracker database.');
    connection.query(sql, (err) => {
        if (err) throw err;
        console.log('Seed data inserted successfully.');
        connection.end();
    });
});