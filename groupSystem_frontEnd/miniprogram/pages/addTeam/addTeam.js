var app=getApp()
Page({
 //initial data
 data: {
  teamid:null,
  number1:["2","3","4","5","6","7","8","9"],
  programName:["AI","Data Analysis","Deep Learning","Machine Learning",
  "Neural Network","Blockchain","Biological computing","Cloud Computation",
  "Software Development","Websit Development","Mini program"],
  teamname:null,
  team_photo:'https://the9-1305716972.cos.ap-shanghai.myqcloud.com/team_photo.jpg',
  programScope:null,
  numberOfMember:'',
  membersdata1:null,
  selectArray: [
     {"id":3,
    "text": "3"
},{
  "id":4,
  "text":"4"
},{
  "id":5,
  "text":"5"
},{
  "id":6,
  "text":"6"
},{
  "id":7,
  "text":"7"
},{
  "id":8,
  "text":"8"
}
],
shownum:3,
shownumstr:"",
skill:[],
poschangefromback:null,
posidfb:null,
backid:null,
programid:null,
useridd:null,

mb1:false,
pic1:null,
name1:null,
pos1:null,
posi1:1,
sk1:[1,1,1],

mb2:false,
pic2:null,
name2:null,
pos2:null,
posi2:1,
sk2:[1,1,1],

mb3:false,
pic3:null,
name3:null,
pos3:null,
posi3:1,
sk3:[1,1,1],

mb4:false,
pic4:null,
name4:null,
pos4:null,
posi4:1,
sk4:[1,1,1],

mb5:false,
pic5:null,
name5:null,
pos5:null,
posi5:1,
sk5:[1,1,1],

mb6:false,
pic6:null,
name6:null,
pos6:null,
posi6:1,
sk6:[1,1,1],

mb7:false,
pic7:null,
name7:null,
pos7:null,
posi7:1,
sk7:[1,1,1],

mb8:false,
pic8:null,
name8:null,
pos8:null,
posi8:1,
sk8:[1,1,1],

mb9:false,
pic9:null,
name9:null,
pos9:null,
posi9:1,
sk9:[1,1,1],

},

onLoad: function (options) {
   console.log(options)
  //UGC
   this.setData({
    membersdata1:app.membersdata9,
    useridd:getApp().globalData.user_id,
  })
  //This page converts data binding
  this.setData({
    pic1:app.membersdata9[0].image,
    name1:app.membersdata9[0].name,
    pos1:app.membersdata9[0].position, 

    pic2:app.membersdata9[1].image,
    name2:app.membersdata9[1].name,
    pos2:app.membersdata9[1].position, 

    pic3:app.membersdata9[2].image,
    name3:app.membersdata9[2].name,
    pos3:app.membersdata9[2].position, 

    pic4:app.membersdata9[3].image,
    name4:app.membersdata9[3].name,
    pos4:app.membersdata9[3].position, 

    pic5:app.membersdata9[4].image,
    name5:app.membersdata9[4].name,
    pos5:app.membersdata9[4].position, 

    pic6:app.membersdata9[5].image,
    name6:app.membersdata9[5].name,
    pos6:app.membersdata9[5].position, 

    pic7:app.membersdata9[6].image,
    name7:app.membersdata9[6].name,
    pos7:app.membersdata9[6].position, 

    pic8:app.membersdata9[7].image,
    name8:app.membersdata9[7].name,
    pos8:app.membersdata9[7].position, 

    pic9:app.membersdata9[8].image,
    name9:app.membersdata9[8].name,
    pos9:app.membersdata9[8].position, 
  })
  //The first time the display is defined
  this.setData({
    mb1:true,
    mb2:true,
    mb3:true,
    mb4:false,
    mb5:false,
    mb6:false,
    mb7:false,
    mb8:false,
    mb9:false
 })

 
},

/**
 * Lifecycle function - listens for the page to render for the first time
 */

/**
 *Lifecycle function - listens for page display
 */
onShow: function () {
  console.log(this.data.skill, this.data.poschangefromback,this.data.backid,this.data.posidfb)
  var backid=this.data.backid;
  var posset=this.data.poschangefromback
  var skillc=this.data.skill
  var posii=this.data.posidfb
  if(backid==1){
    this.setData({
      pos1:posset,
      sk1:skillc,
      posi1:posii
    })
  }
  if(backid==2){
    this.setData({
      pos2:posset,
      sk2:skillc,
      posi2:posii
    })
  }
  if(backid==3){
    this.setData({
      pos3:posset,
      sk3:skillc,
      posi3:posii
    })
  }
  if(backid==4){
    this.setData({
      pos4:posset,
      sk4:skillc,
      posi4:posii
    })
  }
  if(backid==5){
    this.setData({
      pos5:posset,
      sk5:skillc,
      posi5:posii
    })
  }
  if(backid==6){
    this.setData({
      pos6:posset,
      sk6:skillc,
      posi6:posii
    })
  }
  if(backid==7){
    this.setData({
      pos7:posset,
      sk7:skillc,
      posi7:posii
    })
  }
  if(backid==8){
    this.setData({
      pos8:posset,
      sk8:skillc,
      posi8:posii
    })
  }
  if(backid==9){
    this.setData({
      pos9:posset,
      sk9:skillc,
      posi9:posii
    })
  }

  

  // var iddd=e.detail.

},

// nemberchange:function(e){
//   var i = e.detail.value;
//   var value = this.data.number1[i];
//   this.setData({
//      choice1:value
//   })
// },
programchange:function(e){
  var ii = e.detail.value;
  var i = ii-1+2;
  var value = this.data.programName[ii];
  this.setData({
    programchoose:value,
    programid:i,
  })
},
getData:function(e){
console.log(e.detail.id)
this.setData({
  shownum: e.detail.id
})
console.log(this.data.shownum)
this.abcd()

},
abcd:function(){



if(this.data.shownum==3){
this.setData({
  mb1:true,
  mb2:true,
  mb3:true,
  mb4:false,
  mb5:false,
  mb6:false,
  mb7:false,
  mb8:false,
  mb9:false
})
this.onReady;
}
if(this.data.shownum==4){
this.setData({
  mb1:true,
  mb2:true,
  mb3:true,
  mb4:true,
  mb5:false,
  mb6:false,
  mb7:false,
  mb8:false,
  mb9:false
})
this.onReady;
}

if(this.data.shownum==5){
this.setData({
  mb1:true,
  mb2:true,
  mb3:true,
  mb4:true,
  mb5:true,
  mb6:false,
  mb7:false,
  mb8:false,
  mb9:false
})
this.onReady;
 }

if(this.data.shownum==6){
this.setData({
  mb1:true,
  mb2:true,
  mb3:true,
  mb4:true,
  mb5:true,
  mb6:true,
  mb7:false,
  mb8:false,
  mb9:false
})
this.onReady;
  }

if(this.data.shownum==7){
    this.setData({
  mb1:true,
  mb2:true,
  mb3:true,
  mb4:true,
  mb5:true,
  mb6:true,
  mb7:true,
  mb8:false,
  mb9:false
    })
    this.onReady;
      } 

if(this.data.shownum==8){
  this.setData({
    mb1:true,
    mb2:true,
    mb3:true,
    mb4:true,
    mb5:true,
    mb6:true,
    mb7:true,
    mb8:true,
    mb9:false
  })
  this.onReady;
  }   

if(this.data.shownum==9){
    this.setData({
    mb1:true,
    mb2:true,
    mb3:true,
    mb4:true,
    mb5:true,
    mb6:true,
    mb7:true,
    mb8:true,
    mb9:true
    })
    this.onReady;
    } 


},
cm:function(e){
 var id = e.currentTarget.dataset.mbid;
 this.setData({
   shownumstr:this.data.shownum,
 })
wx.navigateTo({
  url: '/pages/member/member?mbid='+id
})
},
postall:function(){
 var that=this;
 console.log(this.data.teamname);
 if(this.data.teamname!=null){
   if(this.data.programid!=null){
     if(this.data.programScope!=null){
     wx.request({
   url: 'https://thenine.ltd/save_team_info/save_team_info',
   data: {team_image:{image_url:this.data.team_photo},
          user:{user_id: this.data.useridd},
          team:{number:this.data.shownum,name:this.data.teamname,scope:this.data.programScope},
          team_prRel:{program_id:this.data.programid}   
  },
   method: 'POST',
   
   complete: (result) => {
     var num=that.data.shownum-1+2;
     var teamid=result.data
    console.log("finish in first part")
     console.log(result)
    //  that.setData({
    //    teamid:result.data,
    //  })
    if(teamid>0){
      for(var iti=1; iti<num;iti++){
        // var posidin=0;
        // var skidin=[];
        
        if(iti==1){
          var posidin1=this.data.posi1;
          var skidin1=this.data.sk1;
          
          wx.request({
            url: 'https://thenine.ltd/save_team_info/save_team_poRel',
            data: {    
                 team:{    team_id:teamid,            },
                 team_poRel:{
                     position_ids: posidin1,
   
                     number:1,
                 }
             },
            method: 'POST',
            success: (result) => {
              console.log("success 2222221")
            },
          })
          wx.request({
            url: 'https://thenine.ltd/save_team_info/save_team_skRel',
            data: {    
                 team:{
                     team_id:teamid,
                     },
                 team_skRel:{
                     skill_ids: skidin1,
                     number:1
                 }
             },
            method: 'POST',
            success: (result) => {
              console.log("success 3333331")
            },
         
          })
         }
         if(iti==2){
          var posidin2=this.data.posi2;
          var skidin2=this.data.sk2;
          
          wx.request({
            url: 'https://thenine.ltd/save_team_info/save_team_poRel',
            data: {    
                 team:{    team_id:teamid,
                     },
                 team_poRel:{
                     position_ids: posidin2,
   
                     number:2,
                 }
             },
            method: 'POST',
            success: (result) => {
              console.log("success 222222'2'")
            },
          })
          wx.request({
            url: 'https://thenine.ltd/save_team_info/save_team_skRel',
            data: {    
                 team:{
                     team_id:teamid,
                     },
                 team_skRel:{
                     skill_ids: skidin2,
                     number:2
                 }
             },
            method: 'POST',
            success: (result) => {
              console.log("success 3333332")
            },
         
          })
         }
         if(iti==3){
          var posidin3=this.data.posi3;
          var skidin3=this.data.sk3;
          
          wx.request({
            url: 'https://thenine.ltd/save_team_info/save_team_poRel',
            data: {    
                 team:{
                     team_id:teamid,
                     },
                 team_poRel:{
                     position_ids: posidin3,
   
                     number:3,
                 }
             },
            method: 'POST',
            success: (result) => {
              console.log("success 2222223")
            },
          })
          wx.request({
            url: 'https://thenine.ltd/save_team_info/save_team_skRel',
            data: {    
                 team:{
                     team_id:teamid,
                     },
                 team_skRel:{
                     skill_ids: skidin3,
                     number:3
                 }
             },
            method: 'POST',
            success: (result) => {
              console.log("success 333333'3")
              wx.showToast({
                title: 'Create Success',
              })
            },
         
          })
         }
         if(iti==4){
          var posidin4=this.data.posi4;
          var skidin4=this.data.sk4;
          
          wx.request({
            url: 'https://thenine.ltd/save_team_info/save_team_poRel',
            data: {    
                 team:{
                     team_id:teamid,
                     },
                 team_poRel:{
                     position_ids: posidin4,
   
                     number:4,
                 }
             },
            method: 'POST',
            success: (result) => {
              console.log("success 2222224")
            },
          })
          wx.request({
            url: 'https://thenine.ltd/save_team_info/save_team_skRel',
            data: {    
                 team:{
                     team_id:teamid,
                     },
                 team_skRel:{
                     skill_ids: skidin4,
                     number:4
                 }
             },
            method: 'POST',
            success: (result) => {
              console.log("success 3333334")
            },
         
          })
         }
         if(iti==5){
          var posidin5=this.data.posi5;
          var skidin5=this.data.sk5;
          
          wx.request({
            url: 'https://thenine.ltd/save_team_info/save_team_poRel',
            data: {    
                 team:{
                     team_id:teamid,
                     },
                 team_poRel:{
                     position_ids: posidin5,
   
                     number:5,
                 }
             },
            method: 'POST',
            success: (result) => {
              console.log("success 2222225")
            },
          })
          wx.request({
            url: 'https://thenine.ltd/save_team_info/save_team_skRel',
            data: {    
                 team:{
                     team_id:teamid,
                     },
                 team_skRel:{
                     skill_ids: skidin5,
                     number:5
                 }
             },
            method: 'POST',
            success: (result) => {
              console.log("success 3333335")
            },
         
          })
         }
         if(iti==6){
          var posidin6=this.data.posi6;
          var skidin6=this.data.sk6;
          
          wx.request({
            url: 'https://thenine.ltd/save_team_info/save_team_poRel',
            data: {    
                 team:{
                     team_id:teamid,
                     },
                 team_poRel:{
                     position_ids: posidin6,
   
                     number:6,
                 }
             },
            method: 'POST',
            success: (result) => {
              console.log("success 2222226")
            },
          })
          wx.request({
            url: 'https://thenine.ltd/save_team_info/save_team_skRel',
            data: {    
                 team:{
                     team_id:teamid,
                     },
                 team_skRel:{
                     skill_ids: skidin6,
                     number:6
                 }
             },
            method: 'POST',
            success: (result) => {
              console.log("success 3333336")
            },
         
          })
         }
         if(iti==7){
          var posidin7=this.data.posi7;
          var skidin7=this.data.sk7;
          
          wx.request({
            url: 'https://thenine.ltd/save_team_info/save_team_poRel',
            data: {    
                 team:{
                     team_id:teamid,
                     },
                 team_poRel:{
                     position_ids: posidin7,
   
                     number:7,
                 }
             },
            method: 'POST',
            success: (result) => {
              console.log("success 2222227")
            },
          })
          wx.request({
            url: 'https://thenine.ltd/save_team_info/save_team_skRel',
            data: {    
                 team:{
                     team_id:teamid,
                     },
                 team_skRel:{
                     skill_ids: skidin7,
                     number:7
                 }
             },
            method: 'POST',
            success: (result) => {
              console.log("success 3333337")
            },
         
          })
         }
         if(iti==8){
          var posidin8=this.data.posi8;
          var skidin8=this.data.sk8;
          
          wx.request({
            url: 'https://thenine.ltd/save_team_info/save_team_poRel',
            data: {    
                 team:{
                     team_id:teamid,
                     },
                 team_poRel:{
                     position_ids: posidin8,
   
                     number:8,
                 }
             },
            method: 'POST',
            success: (result) => {
              console.log("success 2222228")
            },
          })
          wx.request({
            url: 'https://thenine.ltd/save_team_info/save_team_skRel',
            data: {    
                 team:{
                     team_id:teamid,
                     },
                 team_skRel:{
                     skill_ids: skidin8,
                     number:8
                 }
             },
            method: 'POST',
            success: (result) => {
              console.log("success 3333338")
            },
         
          })
         }
         if(iti==9){
          var posidin9=this.data.posi9;
          var skidin9=this.data.sk9;
          
          wx.request({
            url: 'https://thenine.ltd/save_team_info/save_team_poRel',
            data: {    
                 team:{                   team_id:teamid,                   },
                 team_poRel:{
                     position_ids: posidin9,
   
                     number:9,
                 }
             },
            method: 'POST',
            success: (result) => {
              console.log("success 2222229")
            },
          })
          wx.request({
            url: 'https://thenine.ltd/save_team_info/save_team_skRel',
            data: {    
                 team:{
                     team_id:teamid,
                     },
                 team_skRel:{
                     skill_ids: skidin9,
                     number:9
                 }
             },
            method: 'POST',
            success: (result) => {
              console.log("result")
            },
         
          })
         }
  
       
       }
    }else if(teamid<0){
      wx.showToast({
        title: 'change\r\n teamName',
        icon:'none'
      })
    }else{
      wx.showToast({
        title: 'had\r\n a team',
        icon:'none'
      })
    }
     
   },
   
 })
     } 
      else{
     wx.showToast({
     title:"program scope is null",
     icon: 'loading',//icons，"success"、"loading" 
     duration: 1500,//Set prompt delay time，DecDelay，default：1500 
     mask: false,//Whether to display a transparent mask，Preventing touch penetration，default：false 
     complete:function(){
       console.log("programScope is null, no post")
     }
    })
  }
 }
 else{
 wx.showToast({
  title:"program didn't chooce ",
  icon: 'loading',//icons，"success"、"loading"
  duration: 1500,//Set prompt delay time，DecDelay，default：1500 
  mask: false,//Whether to display a transparent mask，Preventing touch penetration，default：false 
  complete:function(){
    console.log("programid is null, no post")
  }
 })

}
}
else{
wx.showToast({
  title:"teamname is null",
  icon: 'loading',//icons，"success"、"loading"
  duration: 1500,//Set prompt delay time，DecDelay，default：1500 
  mask: false,//Whether to display a transparent mask，Preventing touch penetration，default：false 
  complete:function(){
    console.log("teamname is null, no post")
  }
 })
}
},
scopechange:function(e){
 this.setData({
  programScope:e.detail.value
 })
},
namechange:function(e){
this.setData({
 teamname:e.detail.value
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
              // The tempFilePath can be used as the SRC attribute of the img tag to display the image
              const filePath = res.tempFilePaths[0]
              const cloudPath = `${that.user_id}team${filePath.match(/\.[^.]+?$/)[0]}`
              // that.setData({ team_photo: tempFilePaths})
              wx.cloud.uploadFile({
                cloudPath,
                filePath,
                success(res) {
                  wx.cloud.getTempFileURL({
                    fileList: [res.fileID],
                    success(res){
                      // get temp file URL
                      
                      that.setData({team_photo: res.fileList[0].tempFileURL})
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
            current: that.data.team_photo, // The currently displayed image's HTTP link
            urls: [that.data.team_photo]
          })
        }
      }
    }
  })
},


  



})