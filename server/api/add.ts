import { FirstUser } from '../models/Admin.model'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const dataCreate = await FirstUser.create({
      nombre: body.nombre,
      rut: body.rut,
      emai: body.email
      
    })
    return dataCreate
  })