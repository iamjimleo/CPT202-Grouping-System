//index.js
Component({
  /**
   * A list of properties for the component
   */
  properties: {
    propArray: {
      type: Array,
    }
  },
  /**
   * The initial data for the component
   */
  data: {
    selectShow: false,//The initial option is not displayed
    selectText: ": ",//The initial content
  },
  /**
   * The list of methods for the component
   */
  methods: {
    //The display of option or not
    selectToggle: function () {
      var nowShow = this.data.selectShow;//Gets the status displayed by the current Option

      this.setData({
        selectShow: !nowShow
      })
    },
    //config
    setText: function (e) {
      var nowData = this.properties.propArray;
      //The data for the current option is passed from the page that introduced the component, so the only way to get 
      //the data here is through this.properties
      var nowIdx = e.target.dataset.index;//The currently clicked index
      var nowText = nowData[nowIdx].text || nowData[nowIdx].value || nowData[nowIdx];//The content currently clicked
      //Execute the animation again. Note that it must, must, must use this.animation
      this.setData({
        selectShow: false,
        selectText: nowText,
      })
      this.triggerEvent('select', nowData[nowIdx])
    }
  }
})