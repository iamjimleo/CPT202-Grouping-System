Page({
  data: {
    user_id:'',
    team_id:'',
    host_id:'',
    team:[],
    number:null,
    next:{}
  },
  onLoad: function (options) {
    this.setData({user_id: options.user_id});
    console.log(this.data.user_id)
    this.setData({team_id: options.team_id});
    console.log(this.data.team_id)
    this.setData({host_id: options.host_id});
    console.log(this.data.host_id)
    this.setData({state: options.state})
    var that = this;
    wx.request({
      data:{team_id:this.data.team_id},
      url:'https://thenine.ltd/view_application/view_application',
      method:'POST',
      success:function(res){
        that.setData({team: res.data})
        console.log(that.data.team)
      }
  })
  },

  conf:function(e){
    var that = this;
    wx.request({
      data:{user_id:this.data.user_id*1,team_id:this.data.team_id*1,number:this.data.number,host_id:that.data.host_id*1},
      url:'https://thenine.ltd/apply/accept',
      method:'POST',
      success:function(res){
        that.setData({next: res.data})
        console.log(that.data.next)
        wx.redirectTo({
          url: '/pages/apply/apply',
        })
      }
  })
  },

  click:function(event){
    var id = parseInt(event.currentTarget.id);
    this.setData({number:id});
    console.log(id);
  },
})