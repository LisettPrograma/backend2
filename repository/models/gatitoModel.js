import {Schema, Types, model} from 'mongoose'

const gatitoSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },

    edad: {
        type: Number,
        required: true,
    },

    raza:{
        type: String,
        required: true,
    },

    sexo: {
        type: String,
        required: true,
    },
});

export const GatitoModel = model('Gatito', gatitoSchema)