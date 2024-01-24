import { Schema, model} from 'mongoose'

const DataSchema = new Schema({
    nombre: String,
    email: String,
    rol: String,
    username: String,
    password: String
});

export const DataUser = model('dataUsers', DataSchema)