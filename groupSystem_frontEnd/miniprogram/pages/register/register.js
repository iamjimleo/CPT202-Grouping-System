// pages/register/register.js
var interval = null //Countdown function
Page({
  data: {
    userMailAddress: '', // The initial state, at first do not know the user to enter the user name and password
    checkCode: '',
    getCodeSuccess:'false',
    password: '',
    conPassword: '',
    time:'Checkcode',
    currentTime: 61,
    disabled: false 
  },  
  bindUserMailAddress: function(e){
    this.setData({userMailAddress: e.detail.value})
  },
  bindCheckCode: function(e){
    this.setData({checkCode: e.detail.value})
  },
  bindPassword: function(e){
    this.setData({pwd: e.detail.value})
  },
  // bindConfirmPassword: function(e){
  //   this.setData({pwd1: e.detail.value})
  // },
  getcode: function (){
    var that = this;
      var postemail = this.data.userMailAddress.split("@")
      console.log(postemail[1])
      if(postemail[1]=="student.xjtlu.edu.cn"){
        wx.request({
          url: 'https://thenine.ltd/user/send', //The URL where the data is requested
          data: { email: this.data.userMailAddress}, //Parameters need to be passed to the back end
          method: 'POST', //Request method (currently only POST)
          success: function(res) { //The res is the parameter sent by the back end after a successful request
            console.log(res.data.isSuccess); //The name of the variable can be retrieved in the form of.data
            console.log(res.statusCode);
            if(res.data.isSuccess==true){
              var currentTime = that.data.currentTime
              interval = setInterval(function () {
                currentTime--;
                that.setData({          
                  time: currentTime+'s',
                  disabled: true      })
                if (currentTime <= 0) {
                  //console.log(currentTime)
                  clearInterval(interval)
                  that.setData({
                    time: 'Resend',
                    currentTime:61,
                    disabled: false   
                  })
                }
              }, 1000)  
            }else{
              wx.showToast({
                title: 'Send failed',
                icon: 'error'
              })
            }
          }
        })
      }else{
        wx.showToast({
          title: 'XJTLU email',
          icon: 'error'
        })
      
      }
    
  },

  login: function(e) {
   
    var that = this
      wx.request({
        url: 'https://thenine.ltd/user/verify', //api 
        data: { email: this.data.userMailAddress, verifycode:this.data.checkCode},
        method: 'POST',
        success: function(res) {
          console.log(res)
          if(res.data.isSuccess == true ){
            var utilMd5 = require('../../utils/md5.js');
            that.data.pwd = utilMd5.hexMD5(that.data.pwd);
            wx.request({
              url: 'https://thenine.ltd/user/register', //api 
              data: { email: that.data.userMailAddress, password:that.data.pwd},
              method: 'POST',
              success: function(res) {
                console.log(res)
                if(res.data.isSuccess == true){
                  wx.navigateTo({
                    url: '/pages/login/login?email=' +that.data.userMailAddress,
                  })
                }else{
                  wx.showToast({
                    title: 'Login failed'
                  })
                }
              } 
            })
           }
          //else if(that.data.pwd1 != that.data.pwd){
          //   wx.showToast({
          //     title: 'wrong \r\nconfirm pwd',
          //   })
          // }
           else {
            wx.showToast({
              title: 'wrong \r\nverifycode',
            })
          }
        } 
      })        
  }
})