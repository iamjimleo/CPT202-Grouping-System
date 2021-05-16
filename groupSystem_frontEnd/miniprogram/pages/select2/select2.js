// pages/select/select.js
Component({
  /**
   * A list of properties for the component
   */
  properties: {
    propArray:{
      type:Array,
  }

  },

  /**
   * The initial data for the component
   */
  data: {
    selectShow:false,//The initial option is not displayed
    nowText:"3",//The initial content
    animationData:{}//Animation of the right arrow
  },

  /**
   * The list of methods for the component
   */
  methods: {
//The display of option or not
selectToggle:function(){
  var nowShow=this.data.selectShow;//Gets the status displayed by the current Option
  //Createanimatiom
  var animation = wx.createAnimation({
      timingFunction:"ease"
  })
  this.animation=animation;
  if(nowShow){
      animation.rotate(0).step();
      this.setData({
          animationData: animation.export()
      })
  }else{
      animation.rotate(180).step();                
      this.setData({
          animationData: animation.export()
      })
  }
  this.setData({
      selectShow: !nowShow
  })
},
//config
setText:function(e){
  var nowData = this.properties.propArray;
  //The data for the current option is passed from the page that introduced the component, so the only way to get the 
  // data here is through this.properties
  var nowIdx = e.target.dataset.index;//The currently clicked index
  var nowText = nowData[nowIdx].text;//The content currently clicked
  var nowID = nowData[nowIdx].id;
  var nowDate={
    id:nowID,
    text:nowText
}
this.triggerEvent('myget', nowDate)

  
  //Execute the animation again. Note that it must, must, must use this.animation
  this.animation.rotate(0).step();
  this.setData({
      selectShow: false,
      nowText:nowText,
      animationData: this.animation.export()
  })
}
  }

})
