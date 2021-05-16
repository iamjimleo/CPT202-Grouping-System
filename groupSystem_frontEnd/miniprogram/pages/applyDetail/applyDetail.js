Page({
  data: {
    user_id:'',
    team_id:'',
    name:'',
    photo_url:'',
    major:'',
    phone:'',
    email:'',
    skill:'',
    program:'',
    position:'',
    experience_description:'',
    award_description:'',
    state:'',
    host_id:''
  },
  onLoad: function (options) {
    this.setData({
      team_id: options.team_id,
      host_id: getApp().globalData.user_id
    })
    console.log(options.state)
    this.setData({user_id: options.user_id})
    this.setData({state: options.state});
    var that = this;
    wx.request({
      url: 'https://thenine.ltd/save_user_info/get_user_info', 
      data:{user_id:that.data.user_id*1},
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
  reject: function() {
    var that = this;
    wx.showModal({
      cancelColor: 'cancelColor',
      title: 'Notice',
      content: 'Do you confirm ?',
      cancelText:'Cancel',
      confirmText:'Confirm',
      success(res){
        if(res.confirm){
          wx.request({
            url: 'https://thenine.ltd/apply/reject', 
            data:{user_id:that.data.user_id*1, team_id:that.data.team_id*1, host_id:that.data.host_id*1},
            method: 'POST',
            success: function(res){
              console.log(res);
              // that.setData({
              //   name: res.data.name,
              wx.showToast({
                title: 'Success',
              })
              wx.navigateBack({
                delta: 2,
              })
              // })
            }
          }) 
        }
      }
    })
    
  }
})