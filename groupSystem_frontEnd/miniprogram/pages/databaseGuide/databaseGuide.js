// pages/databaseGuide/databaseGuide.js

const app = getApp()

Page({

  data: {
    step: 1,
    counterId: '',
    openid: '',
    count: null,
    queryResult: '',
  },

  onLoad: function (options) {
    if (app.globalData.openid) {
      this.setData({
        openid: app.globalData.openid
      })
    }
  },

  onAdd: function () {
    // const db = wx.cloud.database()
    // db.collection('counters').add({
    //   data: {
    //     count: 1
    //   },
    //   success: res => {
    //     // The result returned will contain the _id of the newly created record
    //     this.setData({
    //       counterId: res._id,
    //       count: 1
    //     })
    //     wx.showToast({
    //       title: 'New Record Successfully',
    //     })
    //     
    //   },
    //   fail: err => {
    //     wx.showToast({
    //       icon: 'none',
    //       title: 'New record failed'
    //     })
    //     
    //   }
    // })
  },

  onQuery: function() {
    // const db = wx.cloud.database()
    // // Query the current user's ownership counters
    // db.collection('counters').where({
    //   _openid: this.data.openid
    // }).get({
    //   success: res => {
    //     this.setData({
    //       queryResult: JSON.stringify(res.data, null, 2)
    //     })
    //     
    //   },
    //   fail: err => {
    //     wx.showToast({
    //       icon: 'none',
    //       title: 'Query record failed'
    //     })
    //     
    //   }
    // })
  },

  onCounterInc: function() {
    // const db = wx.cloud.database()
    // const newCount = this.data.count + 1
    // db.collection('counters').doc(this.data.counterId).update({
    //   data: {
    //     count: newCount
    //   },
    //   success: res => {
    //     this.setData({
    //       count: newCount
    //     })
    //   },
    //   fail: err => {
    //     icon: 'none',
    //     
    //   }
    // })
  },

  onCounterDec: function() {
    // const db = wx.cloud.database()
    // const newCount = this.data.count - 1
    // db.collection('counters').doc(this.data.counterId).update({
    //   data: {
    //     count: newCount
    //   },
    //   success: res => {
    //     this.setData({
    //       count: newCount
    //     })
    //   },
    //   fail: err => {
    //     icon: 'none',
    //     
    //   }
    // })
  },

  onRemove: function() {
    // if (this.data.counterId) {
    //   const db = wx.cloud.database()
    //   db.collection('counters').doc(this.data.counterId).remove({
    //     success: res => {
    //       wx.showToast({
    //         title: 'successfully delete',
    //       })
    //       this.setData({
    //         counterId: '',
    //         count: null,
    //       })
    //     },
    //     fail: err => {
    //       wx.showToast({
    //         icon: 'none',
    //         title: 'fail to delete',
    //       })
    //       
    //     }
    //   })
    // } else {
    //   wx.showToast({
    //     title: 'No record can be deleted, see Creating a record',
    //   })
    // }
  },

  nextStep: function () {
    // In the first step, you need to check if you have an OpenID, if you don't need it
    if (this.data.step === 1 && !this.data.openid) {
      wx.cloud.callFunction({
        name: 'login',
        data: {},
        success: res => {
          app.globalData.openid = res.result.openid
          this.setData({
            step: 2,
            openid: res.result.openid
          })
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: 'Failed to get the OpenID. Please check if the Login cloud function is deployed',
          })
          
        }
      })
    } else {
      const callback = this.data.step !== 6 ? function() {} : function() {
        console.group('数据库文档')
        console.log('https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/database.html')
        console.groupEnd()
      }

      this.setData({
        step: this.data.step + 1
      }, callback)
    }
  },

  prevStep: function () {
    this.setData({
      step: this.data.step - 1
    })
  },

  goHome: function() {
    const pages = getCurrentPages()
    if (pages.length === 2) {
      wx.navigateBack()
    } else if (pages.length === 1) {
      wx.redirectTo({
        url: '../index/index',
      })
    } else {
      wx.reLaunch({
        url: '../index/index',
      })
    }
  }

})
