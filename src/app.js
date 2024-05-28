const express = require('express')
const Profesor = require('./mongoSchemas/profesor.schema')

const app = express()
app.use(express.json())

app.get("/profesor", async (req, res) => {
    const profesores = await Profesor.find({});
    res.status(200).json(profesores)
})

app.post("/profesor", async (req, res) => {
    const data = req.body
    const profesor = await Profesor.create(data)
    res.status(201).json(profesor)
})

app.listen(3001, () => {
    console.log("Server iniciado.")
})