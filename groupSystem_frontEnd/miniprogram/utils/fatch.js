module.exports = (url, data) =>{
  return new Promise((resolve, reject) =>{
    wx.request({
      url:'https://thenine.ltd/${url}',
      data: data,
      success: resolve,
      fail: reject
    })
  })
}
