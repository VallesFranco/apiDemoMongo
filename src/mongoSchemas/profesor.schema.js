const mongoose = require('../config/mongodb')

const mailSchema = mongoose.Schema({
    mail: {type: String, required: true},
    tipo: {type: String, default:"Personal"}
})
const profesorSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    dni: {type: Number, required: true},
    libreta: {type: Boolean, default: false}
    emails: []
}, {
    collection: "profesor"
})

profesorSchema.set('toJSON', {
    transform: ( _ , att) => {
        delete att.__v;
    }
})

module.exports = mongoose.model('Profesor', profesorSchema)