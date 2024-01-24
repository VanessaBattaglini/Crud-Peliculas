import { FirstUser } from '../models/Admin.model'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  await FirstUser.findByIdAndUpdate(body._id,{
    nombre: body.nombre,
    rut: body.rut,
    rol: body.rol,
    tipo: body.tipo
   
  })
  return body
})