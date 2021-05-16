// pages/editTeam/editTeam.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    team_id:'',
    team_photo:'',
    team_name:'',
    team_scope:'',
    WorkDes:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      team_photo: options.team_photo,
      team_id: options.team_id,
    })
  },
  inputName: function(e){
    this.setData({team_name: e.detail.value})
  },
  WorkExeInput:function(e){
    this.setData({team_scope:e.detail.value})
  },
  submitHandler: function(){
    console.log(this.data.team_name);
    console.log(this.data.team_scope);
    wx.request({
      url: 'https://thenine.ltd/save_team_info/change_team_info',
      method: 'POST',
      data:{
        team_image:{
        image_url:this.data.team_photo},
        team:{
          team_id:this.data.team_id,
          name: this.data.team_name,
          scope:this.data.team_scope
        }
      },
      success: function(res) {
        console.log(res);
        if(res.statusCode == 200){
          wx.showToast({
            title: 'Success',
            duration: 1000,
            success: function () {
              setTimeout(function() {
                wx.navigateBack({
                  delta: 1,
                })
              }, 1000);
            }
          })
        }else{
          wx.showToast({
            title: 'Submit failed',
          })
        }
      }
    })
  },
  changeIcon: function(){
    var that = this
    wx.showActionSheet({
      itemList: ["View ICON", "Change ICON"],
      success: function(res){
        if (!res.cancel){
          console.log(res.tapIndex)
          if(res.tapIndex == 1){
            wx.chooseImage({
              count: 1,
              sizeType: ['compressed'],
              sourceType: ['album', 'camera'],
              success (res) {
                wx.showLoading({ title: 'Uploading',  })
                const filePath = res.tempFilePaths[0]
                // upload image
                const cloudPath = `${that.data.user_id}${filePath.match(/\.[^.]+?$/)[0]}`
                wx.cloud.uploadFile({
                  cloudPath,
                  filePath,
                  success(res) {
                    
                    wx.cloud.getTempFileURL({
                      fileList: [res.fileID],
                      success(res){
                        // get temp file URL
                        
                        that.setData({photo_id: res.fileList[0].tempFileURL})
                      }
                    })
                  },
                  complete: () => {
                    wx.hideLoading()
                  }
                })
              }
            })
          }else{
            wx.previewImage({
              current: that.data.photo, // http of Image
              urls: [that.data.photo]
            })
          }
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  }
})