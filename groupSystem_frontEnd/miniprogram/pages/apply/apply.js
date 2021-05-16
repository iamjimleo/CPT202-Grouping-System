var app=getApp()
Page({
  data: {
    Applydata:null,
    list:[],
    listnow:[],
    listall:[],
    length:null,
    team:{},
    user_id:'',
    host_id:'',
    apply_id:null,
    // state:''
  },
  onLoad: function(e){
    var that = this;
    this.setData({host_id: getApp().globalData.user_id})
    wx.request({
      url:'https://thenine.ltd/apply/notification',
      data:{user_id:that.data.host_id},
      method:'POST',
      success:function(res){
        that.setData({team: res.data.application})
        that.setData({comment: res.data.comment})
        // that.setData({state: res.data.state})
        console.log(that.data.team)
        console.log(that.data.comment)
      }
  })
  },
  onPullDownRefresh: function () {
    //The method that will be executed when the refresh is called
  this.onRefresh();
},
onRefresh(){
  //Display the navigation bar load animation on the current page
  wx.showNavigationBarLoading(); 
  //Loading prompt box is displayed. WX.Hidloading is called proactively to close the prompt box
  wx.showLoading({
    title: 'Uploding...',
  })
  this.getData();
},
getData(){
  var that = this;
  wx.request({
        url: 'https://thenine.ltd/apply/notification',
        data:{user_id:that.data.host_id},
      method:'POST',
        //The action that will be performed after the network request is completed
        complete(res){
          that.setData({team: res.data.application})
        that.setData({comment: res.data.comment})
          console.log(res.data)
            wx.hideLoading();
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
        }
  })   
},
  click:function(event){
    var id = parseInt(event.currentTarget.id);
    this.setData({apply_id:id});
    console.log(id);
  },
})