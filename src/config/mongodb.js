const mongoose = require('mongoose')

const MONGO_URL = 'mongodb://root:example@localhost:27017/alumnos?authSource=admin'

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Conexión a Mongo con éxito.`)
}).catch((err) => {
    console.log(`Error al conectarse a Mongo`, err)
})

module.exports = mongoose