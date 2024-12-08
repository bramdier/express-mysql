const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const userRoutes = require('./routes/users');
const middlewareLogRequest = require('./middleware/logRequest');
const upload = require('./middleware/multer');

const app = express();

//Logging
app.use(middlewareLogRequest);
//Json Converter
app.use(express.json());
//Permission Static File
app.use("/assets",express.static('public/images'));
//Routing
app.use("/users", userRoutes);

// Upload Configuration
app.post("/upload", upload.single('photo'), (req, res) => {
    res.json({
        message: "Upload Succesfully"
    })
})

//Handling Error
app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

//Port Server Connection
app.listen(PORT, () => {
    console.log(`Server berhasil running di port ${PORT}`);
})