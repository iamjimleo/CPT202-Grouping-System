// pages/memberInfoView/memberInfoView.js
Page({
  /**
   * The initial data of the page
   */
  data: {
    user_id:'',
    team_id:'',
    name:'',
    major:'',
    phone:'',
    photo_url:'',
    email:'',
    skill:'',
    program:'',
    position:'',
    isHost:'',
    experience_description:'',
    award_description:'',
    state:""
  },
  /**
   * Lifecycle function - listens for page loading
   */
  onLoad: function (options) {
    console.log(options.user_id)
    this.setData({
      user_id: options.user_id,
      state: options.state,
      team_id:options.team_id,
      isHost:options.isHost
    });
    var that = this;
    wx.request({
      url: 'https://thenine.ltd/save_user_info/get_user_info', //api https
      data:{user_id:that.data.user_id},
      method: 'POST',
      success: function(res){
        console.log(res.data);
        that.setData({
          name: res.data.name,
          major:res.data.major,
          phone:res.data.phone,
          photo_url:res.data.photo_url,
          email:res.data.email,
          skill:res.data.skill,
          program:res.data.program,
          position:res.data.position,
          experience_description:res.data.experience_description,
          award_description:res.data.award_description
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
        data:{user_id:that.data.user_id},
      method: 'POST',
        //The action that will be performed after the network request is completed
        complete(res){
          that.setData({
            name: res.data.name,
            major:res.data.major,
            phone:res.data.phone,
            photo_url:res.data.photo_url,
            email:res.data.email,
            skill:res.data.skill,
            program:res.data.program,
            position:res.data.position,
            experience_description:res.data.experience_description,
            award_description:res.data.award_description
          })
          console.log(res.data)
            wx.hideLoading();
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
        }
  })   
},
  remove: function(){
    var that = this;
    wx.showModal({
      title: 'Notice',
      content: 'Do you confirm ?',
      cancelText:'Cancel',
      confirmText:'Confirm',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.request({
            url: 'https://thenine.ltd/apply/exit', //api 
            data:{user_id:that.data.user_id*1, team_id:that.data.team_id*1},
            method: 'POST',
            success: function(res){
              console.log(res);
              if(res.data==true){
                wx.showToast({
                  title: 'Successfully',
                })
              }
            }
          }) 
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})