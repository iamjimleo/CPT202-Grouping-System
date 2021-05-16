//app.js
App({
  properties: {
    // The innerText property is defined here, and the value of the property can be specified when the component is used
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // Here is some component internal data
    someData: {}
  },
  methods: {
    //Here is a custom method
    customMethod: function(){},
  },
  membersdata9: [
    {
      id:0,
      name:"member1",
      image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.jingtop.com%2FUploadFiles%2Fimg_3_3052225689_834940206_26.jpg&refer=http%3A%2F%2Fwww.jingtop.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621360125&t=6f05dd929c82517acc4e0ba3a1afed82",
      position:"Front end",
    },
    {
      id:1,
      name:"member2",
      image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.jingtop.com%2FUploadFiles%2Fimg_3_3052225689_834940206_26.jpg&refer=http%3A%2F%2Fwww.jingtop.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621360125&t=6f05dd929c82517acc4e0ba3a1afed82",
      position:"Front end",

    },
    {
      id:2,
      name:"member3",
      image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.jingtop.com%2FUploadFiles%2Fimg_3_3052225689_834940206_26.jpg&refer=http%3A%2F%2Fwww.jingtop.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621360125&t=6f05dd929c82517acc4e0ba3a1afed82",
      position:"Front end",
    },
    {
      id:3,
      name:"member4",
      image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.jingtop.com%2FUploadFiles%2Fimg_3_3052225689_834940206_26.jpg&refer=http%3A%2F%2Fwww.jingtop.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621360125&t=6f05dd929c82517acc4e0ba3a1afed82",
      position:"Front end",
    },
    {
      id:4,
      name:"member5",
      image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.jingtop.com%2FUploadFiles%2Fimg_3_3052225689_834940206_26.jpg&refer=http%3A%2F%2Fwww.jingtop.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621360125&t=6f05dd929c82517acc4e0ba3a1afed82",
      position:"Front end",
    },
    {
      id:5,
      name:"member6",
      image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.jingtop.com%2FUploadFiles%2Fimg_3_3052225689_834940206_26.jpg&refer=http%3A%2F%2Fwww.jingtop.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621360125&t=6f05dd929c82517acc4e0ba3a1afed82",
      position:"Front end",
    },
    {
      id:6,
      name:"member7",
      image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.jingtop.com%2FUploadFiles%2Fimg_3_3052225689_834940206_26.jpg&refer=http%3A%2F%2Fwww.jingtop.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621360125&t=6f05dd929c82517acc4e0ba3a1afed82",
      position:"Front end",
    },
    {
      id:7,
      name:"member8",
      image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.jingtop.com%2FUploadFiles%2Fimg_3_3052225689_834940206_26.jpg&refer=http%3A%2F%2Fwww.jingtop.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621360125&t=6f05dd929c82517acc4e0ba3a1afed82",
      position:"Front end",
    },
    {
      id:8,
      name:"member9",
      image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.jingtop.com%2FUploadFiles%2Fimg_3_3052225689_834940206_26.jpg&refer=http%3A%2F%2Fwww.jingtop.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621360125&t=6f05dd929c82517acc4e0ba3a1afed82",
      position:"Front end",
    }   
  ],
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env parameter specification
        //   env Parameter determines to which cloud environment resources will be requested by default by the next 
        // cloud development call made by the applet (wx.cloud.xxx)
        //   Enter the environment ID here, which can be viewed by opening the cloud console
        //   If not, use the default environment (the first environment created)
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})
