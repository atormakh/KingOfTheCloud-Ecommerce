const AWS = require("aws-sdk")

class UsersDynamoTable {
  dynamoClient
  constructor() {
    this.dynamoClient = new AWS.DynamoDB.DocumentClient()
  }

  async createUser(user) {
    const params = {
      TableName: "TShirtsDynamoTable-dev",
      Key: {
        pk: `USERS#${user.email}`,
        sk: `USERS#${user.email}`,
      },
      UpdateExpression:
        "set username = :username, email = :email, password = :password, creation_timestamp = :creation_timestamp",
      ExpressionAttributeValues: {
        ":username": user.name || "",
        ":email": user.email || "",
        ":password": user.password || "",
        ":creation_timestamp":
          user.creationTimestamp || new Date().toISOString(),
      },
      ConditionExpression: "attribute_not_exists(pk)",
      ReturnValues: "ALL_NEW",
    }
    const data = await new Promise((resolve, reject) => {
      this.dynamoClient
        .update(params, (err, data) => {
          if (err) {
            reject(err)
          } else {
            resolve(data)
          }
        })
        .promise()
    })
    return data
  }
}

module.exports.UsersDynamoTable = UsersDynamoTable
