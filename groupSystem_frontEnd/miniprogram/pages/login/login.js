/*
1.Design the structure of the data (data attributes)
2.Bind data to the specified element and can only be used after binding
3.The login button click event (specific login logic) (bindTap bubbles?)
*/
// const fetch = require('../../utils/fatch')
Page({
  data: { // The data on the interface determines: the login interface is the email and password
    email: '', // The initial state, at first do not know the user to enter the user name and password
    pwd: '', 
  },
  //Used to handle the login button click event (complete the logon specific logic in this method)
  inputChangeHandler: function (e){
    var prop = e.target.dataset['prop']
    var changed ={}
    changed[prop] =e.detail.value
    this.setData(changed)
  },
  //Jump to the main screen
  navigateToHome: function(e) {
    // md5
    var utilMd5 = require('../../utils/md5.js');
    this.data.pwd = utilMd5.hexMD5(this.data.pwd);
    // 1.Know what the user typed first (what the user typed in the interface layer is not automatically synchronized to // the logical layer, need code implementation)
    // console.log(this.data.email)
    // console.log(this.data.pwd)
    // 2.Judgment is made based on the value entered by the user
    var that = this
    wx.request({
      url: 'https://thenine.ltd/user/exist', //api url:https
      data: { email: this.data.email},
      method: 'POST',
      success: function(res){
        console.log(res.data)
        if(res.data){
          console.log(res.data)
          wx.request({
            url: 'https://thenine.ltd/user/login', //api url:https
            data: { "email": that.data.email, "password": that.data.pwd,},
            method: 'POST',
            success: function(res1) {
              console.log(res1);
              if(res1.data.isSuccess == true){
                getApp().globalData.user_id = res1.data.user_id;
                getApp().globalData.email = that.data.email;
                wx.switchTab({
                  url: '/pages/homepage/homepage',
                })
              } else {
                wx.showToast({
                  title: 'wrong password',
                  icon: 'error'
                })
              }
            } 
          })
        } else {
          wx.showToast({
            title: 'Need register',
            icon: 'error'
          })
        }
      }
    })
  },
  onLoad:function(e){
    this.setData({
      email:e.email,
      pwd:e.pwd
    })
  }
})