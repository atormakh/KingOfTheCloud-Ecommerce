module.exports.handler = async (event, context, callback) => {
  console.log("creating user")
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "No body found in the request",
      }),
    }
  }
  const user = JSON.parse(event.body)
  console.log(user)
  // SAVE TO DATABASE
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "ok", data: { user: user } }),
  }
}
