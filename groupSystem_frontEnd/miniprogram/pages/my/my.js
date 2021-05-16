// pages/my/my.js
Page({
  /**
   * The initial data of the page
   */
  data: {
    teamID:'',
    photo:'',
    user_id:'',
    name: '',
    major:'',
    phone:'',
    email:'',
    photo_url:'',
    state:'',
    team_id:'',
    apply_state:1
  },

  /**
   * Lifecycle function - listens for page loading
   */
  onLoad: function (options) {
    // console.log(getApp().globalData.user_id)
    this.setData({user_id:getApp().globalData.user_id})
    var photo = options.photo
    this.setData({      photo    });
    var that = this;
    wx.request({
      url: 'https://thenine.ltd/save_user_info/get_user_info', //api 
      data:{user_id:that.data.user_id*1},
      method: 'POST',
      success: function(res){
        console.log(res.data);
        that.setData({
          name: res.data.name,          
          photo_url:res.data.photo_url
        })
      }
    })
  },
  onShow: function () {
    var that = this;
    wx.request({
      url: 'https://thenine.ltd/save_user_info/get_user_info', //api 
      data:{user_id:that.data.user_id*1},
      method: 'POST',
      success: function(res){
        console.log(res.data);
        that.setData({
          name: res.data.name,
          photo_url:res.data.photo_url
        })
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
        url: 'https://thenine.ltd/save_user_info/get_user_info',
        data:{user_id:that.data.user_id*1},
        method: 'POST',
        complete(res){
          that.setData({name: res.data.name,
            major:res.data.major,
            phone:res.data.phone,
            email:res.data.email,
            photo_url:res.data.photo_url });
          console.log(res.data)
            wx.hideLoading();
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
        }
  })   
},
  navToMyTeam: function(e){
    var that = this;
    wx.request({
      url: 'https://thenine.ltd/user/team_state', //api https
      data:{user_id:that.data.user_id*1},
      method: 'POST',
      success: function(res){
        console.log(res.data);
        
        that.setData({
          state:res.data.team_state,
          team_id:res.data.team_id
        })
        if(res.data.team_state=='0'){
          wx.navigateTo({
            url: '/pages/noTeam/noTeam' ,
          })
        }if(res.data.team_state=='3'){
          wx.navigateTo({
            url: '/pages/shenqing/shenqing',
          })
        }else{
          wx.request({
            url: 'https://thenine.ltd/team/team_info', //api 
            data:{team_id:that.data.team_id*1, user_id:that.data.user_id*1},
            method: 'POST',
            success: function(res){
              console.log(res.data);
              // that.setData({
              //   apply_state: '1',
              // })
              if(res.data.apply_state==0 ||res.data.apply_state==2){
                wx.navigateTo({
                  url: '/pages/teamInfo/teamInfo?team_id=' + that.data.team_id,
                })
              }
              // if(res.data.apply_state==1||res.apply_state==3){
              //   wx.navigateTo({
              //     url: '/pages/shenqing/shenqing',
              //   })
              // }
            }
          }) 
          
        }
      }
    })
  },
    
})