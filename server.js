const { configDotenv } = require('dotenv');
const express = require('express');
const app = express ();
const PORT = process.env.PORT || 8000;


app.get('/', (req, res) =>{
    return res.status(200).send("Welcome to food app  sirzan ");

})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});