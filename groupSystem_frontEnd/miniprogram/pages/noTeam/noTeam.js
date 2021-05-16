// pages/noTeam/noTeam.js
Page({

  /**
   * The initial data of the page
   */
  data: {

  },
  navigateToAddTeam: function(e) {
    wx.switchTab({ 
      url: '/pages/addTeam/addTeam',
    })
  },
  
  

})