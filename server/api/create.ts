import { FirstUser } from'../models/Admin.model'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  await FirstUser.create(body)
    return "user created"
  })