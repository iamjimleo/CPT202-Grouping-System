// pages/homepage/homepage.js
Page({
  /**
   * The initial data of the page
   */
  data: {
    team:{},
    user_id:'',
    // drop-down list
    first: '0',
    second: '0',
    thirds: '0',
    fours: 'select',
    _num: 0,
    _res: 0,
    quanhui:0,
    // filtrate
    array: [{ name: 'All' }, { name: 'AI' }, { name: 'Data Analysis' }, { name: 'Deep Learning' }, { name: 'Machine Learning' }, { name: 'Neural Network' }, { name: 'Blockchain' }, { name: 'Biological Computation' }, { name: 'Cloud Computation' }, { name: 'Software Development' }, { name: 'Website Development' }, { name: 'Mini Program' }],
    chaoxiang: [{ name: 'All' },{ name: 'Java' }, { name: 'JavaScript' }, { name: 'C #' }, { name: 'C++' }, { name: 'HTML' }, { name: 'Python' }, { name: 'MySql' }, { name: 'CSS' }, { name: 'Web' }],
    louceng: [{name: 'All'}, { name: 'Front End' }, { name: 'Back End' }, { name: 'Scrum Master' }, { name: 'Database' }, { name: 'Testing' }, { name: 'Product Owner' }, { name: 'Marketing' }, { name: 'Accoutout ' }, {name:'UI Design'}],
    one: 0,
    two: 0,
    third: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
  },
  isShow: true,
  currentTab: 0,
  /**
   * Lifecycle function - listens for page loading
   */
  onLoad: function (options) {
    // var user_id = getApp().globalData.user_id
    console.log("host"+getApp().globalData.user_id)
    this.setData({user_id:getApp().globalData.user_id})
    var that = this;
    wx.request({
      url: 'https://thenine.ltd/team/get_all_team', //api
      method: 'GET',
      success: function(res){
        // console.log(res.data);
        that.setData({team: res.data })
        console.log(res.data)
      }
    }) 
  },
  onShow: function () {
    var that = this;
    wx.request({
      url: 'https://thenine.ltd/team/get_all_team', //api
      method: 'GET',
      success: function(res){
        // console.log(res.data);
        that.setData({team: res.data })
        console.log(res.data)
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
        url: 'https://thenine.ltd/team/get_all_team',
        method: 'GET',
        //The action that will be performed after the network request is completed
        complete(res){
          that.setData({team: res.data });
          console.log(res.data)
            wx.hideLoading();
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
        }
  })   
},
  navigateToSW: function() {
    
    wx.navigateTo({
      url: '/pages/swInfo/swInfo',
    })
  },
  // Gets the current position of the scroll bar
  onPageScroll: function (e) {
    // console.log(e)
    if (e.scrollTop > 100) {
      this.setData({        floorstatus: true      });
    } else {
      this.setData({        floorstatus: false      });
    }
  },
 
  //Back To TOP
  goTop: function (e) {  // One click back to the top
    if (wx.pageScrollTo) {
      wx.pageScrollTo({        scrollTop: 0      })
    } else {
      wx.showModal({
        title: 'noti',
        content: 'The current WeChat version is too low to use this feature. Please upgrade to the latest WeChat version and try again.'
      })
    }
  },

  
  // 下拉切换
  hideNav: function () {
    this.setData({displays: "none"    })
  },
   // 区域
   tabNav: function (e) {
    this.setData({      displays: "block"    })
    this.setData({
      selected1: false,
      selected2: false,
      selected: true
    })
    if (this.data.currentTab === e.target.dataset.current) {      return false;
    } else {
      var showMode = e.target.dataset.current == 0;
      this.setData({
        currentTab: e.target.dataset.current,
        isShow: showMode
      })
    }
  },
  // Toggle in a dropdown toggle
  selected: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected2: false,
      selected1: true
    })
  },
  selected2: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true
    })
  }, 
  // filtrate
  choseTxtColor: function (e) {
    var id = e.currentTarget.dataset.id;  //Gets the custom ID value 
    //console.log(e.currentTarget.dataset.id)
    this.setData({      one: id    })
  },
  chaoxiang: function (e) {
    var id = e.currentTarget.dataset.id;  //Gets the custom ID value  
    this.setData({      two: id    })
  },
  louceng: function (e) {
    var id = e.currentTarget.dataset.id;  //Gets the custom ID value 
    this.setData({      third: id    })
  },
  getCode: function(event){
    var that = this
    wx.request({
      url:'https://thenine.ltd/team/filter',
      data:{program_id: this.data.one,skill_id: this.data.two,position_id: this.data.third},
      //data:{program_id:0,skill_id: 0,position_id: 0},
      method:'POST',
      success:function(res){
        console.log({team: res.data })
        that.setData({team: res.data })
      }
  })
  },
})