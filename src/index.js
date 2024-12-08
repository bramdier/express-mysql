const express = require('express');
const mysql = require('mysql2');
const userRoutes = require('./routes/users');
const middlewareLogRequest = require('./middleware/logRequest');

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express_mysql'
  });

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use("/users", userRoutes);

app.use("/", (req, res) => {
    dbPool.execute('SELECT * FROM users', (err, rows) => {
        if(err){
            res.json({
                message: 'Connection Failed'
            })
        }
        res.json({
            message: 'Connection Success',
            data: rows,
        })
    })
})

app.listen(4000, () => {
    console.log('Server berhasil running di port 4000');
})