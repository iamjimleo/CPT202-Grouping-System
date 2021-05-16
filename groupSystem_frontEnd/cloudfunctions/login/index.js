// Cloud Function Template
// Deployment: In the cloud-functions/login folder, right-click and select "Upload and Deploy"

const cloud = require('wx-server-sdk')

// initialization cloud
cloud.init({
  // API The calls are consistent with the current environment of the cloud function
  env: cloud.DYNAMIC_CURRENT_ENV
})

/**
 * This example returns the automatically authenticated applet user OpenID to the applet side
 * 
 * event The argument contains the one passed in by the applet side call data
 * 
 */
exports.main = async (event, context) => {
  console.log(event)
  console.log(context)

  // Additional custom logic can be performed
  // console.log The contents can be viewed in the Cloud Development Cloud Function Call Log

  // Get the WX Context (WeChat call Context), including openID, appID, and unionID (if the unionID fetch condition is 、//met)
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    env: wxContext.ENV,
  }
}

