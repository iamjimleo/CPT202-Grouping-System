Page({
  /**
   * The initial data of the page
   */
  data: {
    user_id:'',
    team_id:'',
    // user_id:"8",
    teamName:" ",
    leader_name:" ",
    team_photo:" ",
    skill:" ",
    program: " ", 
    position:" ",
    state:"",
    exist_position:{},
    rest_position:{},
    scope:"",
    team: {},
    member_id:{}
  },
  /**
   * Lifecycle function - listens for page loading
   */
  
  onLoad: function (e) {
    var that = this;
    var team_id1 = e.team_id;
    // console.log(team_id1);
    // var skill = e.skill
    this.setData({
      // skill,
      user_id:getApp().globalData.user_id,
      team_id: team_id1
    });
    console.log(getApp().globalData.user_id);
    wx.request({
      url: 'https://thenine.ltd/team/team_info', //api 
      data:{team_id:team_id1*1, user_id:that.data.user_id*1},
      method: 'POST',
      success: function(res){
        console.log(res.data);
        that.setData({
          team_id: res.data.team_id,
          teamName: res.data.name, 
          leader_name: res.data.leader_name, 
          scope:res.data.scope,
          member_id:res.data.user_id,
          exist_position:res.data.exist_position,
          rest_position:res.data.rest_position,
          state: res.data.apply_state,
          team_photo:res.data.image_url,
          program:res.data.program,
          skill:res.data.skill
        })
      }
    })    
  },
  onShow: function () {
    var that = this;
    wx.request({
      url: 'https://thenine.ltd/team/team_info', //api 
      data:{team_id:that.data.team_id*1, user_id:that.data.user_id*1},
      method: 'POST',
      success: function(res){
        console.log(res.data);
        that.setData({
          team_id: res.data.team_id,
          teamName: res.data.name, 
          leader_name: res.data.leader_name, 
          scope:res.data.scope,
          team_photo:res.data.image_url
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
        url: 'https://thenine.ltd/team/team_info',
        data:{team_id:that.data.team_id*1, user_id:that.data.user_id*1},
        method: 'POST',
        complete(res){
          that.setData({
            team_id: res.data.team_id,
            teamName: res.data.name, 
            leader_name: res.data.leader_name, 
            scope:res.data.scope,
            member_id:res.data.user_id,
            exist_position:res.data.exist_position,
            rest_position:res.data.rest_position,
            state: res.data.apply_state,
            team_photo:res.data.image_url,
            program:res.data.program,
            skill:res.data.skill
          })
          console.log(res.data)
          wx.hideLoading();
          wx.hideNavigationBarLoading();
          wx.stopPullDownRefresh();
        }
  })   
},
  apply:function(e){
    wx.request({
      url: 'https://thenine.ltd/save_team_info/apply', //api 
      data:{team_id:this.data.team_id, user_id:this.data.user_id*1},
      method: 'POST',
      success: function(res){
        console.log(res.data);
        if(res.data==true){
          wx.redirectTo({
            url: '/pages/applySuccess/applySuccess',
          })
        }else{
          wx.showToast({
            title: 'Apply Failed',
            icon:'none'
          })
        }
      }
    })   
  },
  dropTeam: function(){
    wx.request({
      url: 'https://thenine.ltd/team/drop', //api leader delete the team
      data:{team_id:this.data.team_id*1},
      method: 'POST',
      success: function(res){
        console.log(res.data);
        if(res.data==true){
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
            title: 'Apply Failed',
            icon:'none'
          })
        }
      }
    }) 
  }
  
})