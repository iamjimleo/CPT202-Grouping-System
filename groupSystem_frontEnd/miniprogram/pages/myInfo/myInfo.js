// pages/MyInfo/MyInfo.js
Page({

  data: {
    shows0: false,    
    shows1: false,
    shows2: false,
    user_id:"10",
    name: "",
    major: "",
    userMail: "",
    phone: "",
    photo_id: "https://the9-1305716972.cos.ap-shanghai.myqcloud.com/dePhoto.jpg",
    position_ids: "",
    program_ids: "",
    right_id: "",
    role_id: "",
    skill_ids: "",
    description: "",
    WorkDes:"",
    AwardDes:"",
    who:["all","only teammate","only leader"],
    selectArray: [{
      "id": "1",
      "value": "ICS"
    }, {
      "id": "2",
      "value": "CST"
    },{
      "id": "3",
      "value": "IMIT"
    }],
    skill: ["C#", "Go", "C++", "CSS", "PHP", "Web", "Java", "HTML", "Ruby", "Python", "Swift", "MySql","JavaScript"],
    skillSelect:[],
    position: ["Testing", "Database", "Back End", "Front End",  "Marketing", "UI Design", "Scrum Master", "Product Owner"],
    positionSelect:[],
    program: ["AI", "Blockchain", "Data Analysis", "Mini Program", "Neural Network", "Machine Learning", "Cloud Computation", "Biological Computation", "Software Development", "Website Development"],
    programSelect:[],
    isSuccess:"",
  },
  
  inputName: function(e){
    this.setData({name: e.detail.value})
  },
  inputPhone: function(e){
    this.setData({phone: e.detail.value})
  },
  bindSelectMajor: function(e){
    this.setData({major: e.detail.value})
  },
  skillSelected: function () {
    var nowShow = this.data.shows0;//Gets the status displayed by the current Option
      this.setData({
        shows0: !nowShow
      })
  },
  selectSkillsChange: function (e) {
    var skillId = e.detail.value
    var skillValueLength = skillId.length
    if(skillValueLength > 2){
      this.setData({
      shows0: false
    })
    }
    this.setData({
      skillSelect: skillId
    })
  },
  setSkills: function(){
    this.setData({
      shows0: false
    })
  },
  positionSelected: function () {
    var nowShow = this.data.shows1;//Gets the status displayed by the current Option
      this.setData({
        shows1: !nowShow
      })
  },
  selectPositionChange: function (e) {
    var positionId = e.detail.value
    var positionValueLength = positionId.length
    if(positionValueLength > 2){
      this.setData({
      shows1: false
    })
    }
    this.setData({
      positionSelect: positionId
    })
  },
  setPositions: function(){
    this.setData({
      shows1: false
    })
  },
  programSelected: function () {
    var nowShow = this.data.shows2;//Gets the status displayed by the current Option
      this.setData({
        shows2: !nowShow
      })
  },
  selectProgramsChange: function (e) {
    var programId = e.detail.value
    var programValueLength = programId.length
    if(programValueLength > 2){
      this.setData({
      shows2: false
    })
    }
    console.log(programId)
    this.setData({
      programSelect: programId
    })
  },
  setPrograms: function(){
    this.setData({
      shows2: false
    })
  },
  WorkExeInput:function(e){
    this.setData({WorkDes:e.detail.value})
  },
  AwardExeInput:function(e){
    this.setData({AwardDes:e.detail.value})
  },
  onLoad: function (options) {
    // var user_id = options.user_id
    // var photo_id = options.photo_url
    this.setData({
      user_id: getApp().globalData.user_id,
      userMail: getApp().globalData.email
    });
    // this.setData({
    //   user_id
    // });
    // this.setData({
    //   photo_id
    // })
  },
  
  login: function() {
    var skills = this.data.skillSelect.join(',')
    var positions = this.data.positionSelect.join(',')
    var programs = this.data.programSelect.join(',')
    var that = this;
    console.log(this.data.photo_id)
    console.log(this.data.major)
    wx.request({
      url: 'https://thenine.ltd/save_user_info/save_user_info',
      method: 'POST',
      data: {
        user_image: {photo_url: this.data.photo_id},
        user: {user_id: this.data.user_id, name: this.data.name, major: this.data.major, phone: this.data.phone, experience_description:this.data.WorkDes, award_description:this.data.AwardDes},
        user_poRel: {position_ids: positions},
        user_prRel: {program_ids: programs}, 
        user_riRel: {right_id: this.data.right_id}, 
        user_roRel: {role_id: this.data.role_id}, 
        user_skRel: {skill_ids: skills},
    },
      success: function(res) {
        console.log(res)
        that.setData({isSuccess: res.data})
        if(res.data == true){
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
            title: 'submit failed',
          })
        }
      } 
    })
  },


  changeIcon: function(){
    var that = this
    wx.showActionSheet({
      itemList: ["View ICON", "Change ICON"],
      success: function(res){
        if (!res.cancel){
          console.log(res.tapIndex)
          if(res.tapIndex == 1){
            wx.chooseImage({
              count: 1,
              sizeType: ['compressed'],
              sourceType: ['album', 'camera'],
              success (res) {
                wx.showLoading({ title: 'Uploading',  })
                const filePath = res.tempFilePaths[0]
                // upload image
                const cloudPath = `${that.data.user_id}${filePath.match(/\.[^.]+?$/)[0]}`
                wx.cloud.uploadFile({
                  cloudPath,
                  filePath,
                  success(res) {
                    
                    wx.cloud.getTempFileURL({
                      fileList: [res.fileID],
                      success(res){
                        // get temp file URL
                        
                        that.setData({photo_id: res.fileList[0].tempFileURL})
                      }
                    })
                  },
                  complete: () => {
                    wx.hideLoading()
                  }
                })
              }
            })
          }else{
            wx.previewImage({
              current: that.data.photo, // http of Image
              urls: [that.data.photo]
            })
          }
        }
      }
    })
  },
})