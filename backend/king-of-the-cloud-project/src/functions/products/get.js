"use strict"

module.exports.handler = async (event, context, callback) => {
  console.log("holaa")
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v3.0! Buenisimo",
    }),
  }
}
