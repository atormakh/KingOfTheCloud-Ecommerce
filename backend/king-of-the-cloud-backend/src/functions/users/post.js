const UsersDynamoTableImport = require("../../dao/users.dao")
const UsersDynamoTable = UsersDynamoTableImport.UsersDynamoTable
const userS = require("../../services/users.service")
const UsersService = userS.UsersService

//CREATE USER - POST /users body: { "name": "Agustin Tormakh", "email": "atormakh@itba.edu.ar", "password": "12345678" }
const userService = new UsersService(new UsersDynamoTable())

module.exports.handler = async (event) => {
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Missing body. Body is required",
        code: 400,
      }),
    }
  }
  const user = JSON.parse(event.body) // user =  { "name": "Agustin Tormakh", "email": "atormakh@itba.edu.ar", "password": "12345678" }
  if (!user.name || !user.email || !user.password) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "name, email and password are required",
        code: 400,
      }),
    }
  }
  // SAVE USER INFO IN DATABASE
  const newUser = await userService.createUser(user)
  // RETURN CREATED USER
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "ok",
      code: 200,
      data: {
        user: newUser,
      },
    }),
  }
}
