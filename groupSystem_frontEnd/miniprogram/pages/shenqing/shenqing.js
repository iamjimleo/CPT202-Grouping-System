// pages/shenqing/shenqing.js
var app=getApp()
Page({
  /**
   * The initial data of the page
   */
  data: {
    Applydata:null,
  //  list:[],
  //  listnow:[],
  //  listall:[],
  //  length:null,
  //  now:[1,1,1,1],
  //  all:[0,0,0],
   userId:null,
   team_id:'',
  },

  /**
   * Lifecycle function - listens for page loading
   */
  onLoad: function (options) {
    this.setData({
      userId:getApp().globalData.user_id
    })
    var userid=this.data.userId;
    var that = this;
    wx.request({
      url: 'https://thenine.ltd/save_team_info/get_teamapply',
      data: {user_id: that.data.userId},
     
      method: 'POST',
      
      success: (result) => {
        console.log(result)
        this.setData({
          Applydata:result.data,
        })
        // console.log(Applydata)
      },
      
    })
    
    // this.setData({
    //   Applydata:app.applydata,   
    //   length:app.applydata.length,
    // })


    // this.setData({
    //   now:app.applydata[0].CandidateNow,
    //   all:app.applydata[0].CandidateAll,
    // })
    // for( var i=0;i<app.applydata.length;i++){
    //   this.setData({
    //   now:app.applydata[i].CandidateNow,
    //   all:app.applydata[i].CandidateAll,
    // })
    // var noww=this.data.now;
    // var alll=this.data.all;
    // console.log(noww);
    // console.log(alll);
    //   this.data.list.push({noww,alll})
    // }

    
    // console.log(this.data.length);
    
    
  },


})