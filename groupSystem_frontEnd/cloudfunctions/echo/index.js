const cloud = require('wx-server-sdk')

exports.main = async (event, context) => {
  // event.userInfo Is a deprecated reserved field and is not shown here
  // Get WeChat context such as OpenID please use cloud.getWXContext()
  delete event.userInfo
  return event
}
