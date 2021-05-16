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
    state:""
  },
  onLoad: function (options) {
    this.setData({team_id: options.team_id})
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
})