// pages/member/member.js
Page({

  /**
   * The initial data of the page
   */
  data: {
    skillnamee:[["Java","JavaScript","C #","HTML","Python","MySql","CSS","Ruby","Swift","GO","PHP","Web"],
    ["Java","JavaScript","C #","HTML","Python","MySql","CSS","Ruby","Swift","GO","PHP","Web"],
    ["Java","JavaScript","C #","HTML","Python","MySql","CSS","Ruby","Swift","GO","PHP","Web"],],
    poss:["Front End","Back End","ScrumMaster","Database","Testing","Product Owner","Marketing","Accoutout","UI Design"],
    mbidd:null,
    skillchoicee:[],
    poschoicee:null,
    posid:null,
    skid:[],



  },

  /**
   * Lifecycle function - listens for page loading
   */
  onLoad: function (options) {
    console.log(options)
    var mbidd=options.mbid;
    this.setData({
      mbidd:mbidd
    })
    console.log(mbidd)
  },
 
  skillchangee:function(e){
    var ii = e.detail.value;
    // var i = ii-1+2;
    // var value = this.data.skillnamee[ii];
    var ara=new Array();
    var arb=new Array();
    for(var i=0;i<ii.length;i++){
    var m = ii[i];
    var n = this.data.skillnamee[i][m]
    var mm=m-1+2;
    arb.push(mm);
    ara.push(n);

    }
    
    this.setData({
       skillchoicee:ara,
       skid:arb,

    })
   
  },
  poschangee:function(e){
    var ii = e.detail.value;
    var i = ii-1+2;
    var value = this.data.poss[ii];
    this.setData({
       poschoicee:value,
       posid:i,
    })
  },
  complete:function(e){
    var sc=this.data.skid;
    var pc=this.data.poschoicee;
    var pi=this.data.posid
    var mbidd = this.data.mbidd;
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //current page
    var prevPage = pages[pages.length - 2];  //Previous page
    var Skillf = prevPage.data.skill;
//The setData() method of the previous page object is called directly to save the data to the previous page
prevPage.setData({
  skill:sc,
  poschangefromback:pc,
  backid:mbidd,
  posidfb:pi,
});
wx.navigateBack({
        delta: 1
      })
    
  }
})