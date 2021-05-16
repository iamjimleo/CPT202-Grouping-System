// pages/applySuccess/applySuccess.js
Page({

  /**
   * The initial data of the page
   */
  data: {

  },

  navigateToHome: function(e) {
    wx.switchTab({
     
      url: '/pages/homepage/homepage',
    })
  },

})