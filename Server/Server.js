const express = require("express")

const app = express()
require("dotenv").config()

const PORT =  3333


app.listen(PORT, () => {
    console.log(`started, listening on ${PORT}`)
})