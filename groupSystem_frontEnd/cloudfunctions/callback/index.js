const cloud = require('wx-server-sdk')

cloud.init({
  // API The calls are consistent with the current environment of the cloud function
  env: cloud.DYNAMIC_CURRENT_ENV
})

// Cloud function entry function
exports.main = async (event, context) => {
  console.log(event)

  const { OPENID } = cloud.getWXContext()

  const result = await cloud.openapi.customerServiceMessage.send({
    touser: OPENID,
    msgtype: 'text',
    text: {
      content: `收到：${event.Content}`,
    }
  })

  console.log(result)

  return result
}
