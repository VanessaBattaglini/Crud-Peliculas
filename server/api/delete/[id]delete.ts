import { FirstUser } from '~/server/models/Admin.model'
// import {SchameType, SchameTypes } from 'mongoose'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    try {
    const dataDelete = await FirstUser.findByIdAndDelete(id)
    return dataDelete
    
 } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: '¡El Id no es válido!',
    })
  }
})