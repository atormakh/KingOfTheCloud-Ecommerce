class UsersService {
  usersDynamoTable
  constructor(usersDynamoTable) {
    this.usersDynamoTable = usersDynamoTable
  }

  async createUser(user) {
    const newUser = await this.usersDynamoTable.createUser({
      ...user,
      creation_timestamp: new Date().toISOString(),
    })
    return newUser
  }
}

module.exports.UsersService = UsersService
