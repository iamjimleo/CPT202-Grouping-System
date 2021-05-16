// Cloud function entry file
const cloud = require('wx-server-sdk')

cloud.init()

// Cloud function entry function
exports.main = async (event, context) => {
  console.log(event)
  switch (event.action) {
    case 'requestSubscribeMessage': {
      return requestSubscribeMessage(event)
    }
    case 'sendSubscribeMessage': {
      return sendSubscribeMessage(event)
    }
    case 'getWXACode': {
      return getWXACode(event)
    }
    case 'getOpenData': {
      return getOpenData(event)
    }
    default: {
      return
    }
  }
}

async function requestSubscribeMessage(event) {
  // Here is the template ID. The developer needs to add a template to the applet management background - subscription 
  // message - public template library.
  // Then find the ID of the corresponding template in my template and fill it in here
  return '请到管理后台申请模板 ID 然后在此替换' //for example 'N_J6F05_bjhqd6zh2h1LHJ9TAv9IpkCiAJEpSw0PrmQ'
}

async function sendSubscribeMessage(event) {
  const { OPENID } = cloud.getWXContext()

  const { templateId } = event

  const sendResult = await cloud.openapi.subscribeMessage.send({
    touser: OPENID,
    templateId,
    miniprogram_state: 'developer',
    page: 'pages/openapi/openapi',
    // The fields here should be changed to those required by the template you are applying for
    data: {
      thing1: {
        value: '咖啡',
      },
      time3: {
        value: '2020-01-01 00:00',
      },
    }
  })

  return sendResult
}

async function getWXACode(event) {
  // Here you get the permanently valid applet code, save it in the cloud file store, and finally return the cloud file ID for the front end to use

  const wxacodeResult = await cloud.openapi.wxacode.get({
    path: 'pages/openapi/openapi',
  })

  const fileExtensionMatches = wxacodeResult.contentType.match(/\/([^/]+)/)
  const fileExtension = (fileExtensionMatches && fileExtensionMatches[1]) || 'jpg'

  const uploadResult = await cloud.uploadFile({
    //Cloud file path, here a fixed name for the demonstration
    cloudPath: `wxacode_default_openapi_page.${fileExtension}`,
    // The contents of the file to be uploaded can be directly passed to the image Buffer
    fileContent: wxacodeResult.buffer,
  })

  if (!uploadResult.fileID) {
    throw new Error(`upload failed with empty fileID and storage server status code ${uploadResult.statusCode}`)
  }

  return uploadResult.fileID
}

async function getOpenData(event) {
  return cloud.getOpenData({
    list: event.openData.list,
  })
}
