import { Schema, model} from 'mongoose'

const ManagerSchema = new Schema({
    nombre: String,
    rut: String,
    email: String
    
});

export const FirstUser = model('firstUsers', ManagerSchema)