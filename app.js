const express = require ('express')
require('dotenv').config()
console.log(`The server will run on port ${process.env.SERVER_PORT}`);

const app = express()
const port = process.env.SERVER_PORT

const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;
console.log(process.env)

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`)
})