const network = require("../../utils/network.js");
const util = require("../../utils/util.js");

Page({
  data: {
    titleColor: 'black',
    inputShowed: false,
    inputVal: "",
    firstName: "kobe",
    lastName: "bryant",
    age: 20,
    nowTime: new Date().toLocaleString(),
    isTimeBold: true,
    score: 98,
    movies: [{
        id: "1",
        name: "海王"
      },
      {
        id: "2",
        name: "海贼王"
      },
      {
        id: "3",
        name: "火影忍者"
      }, {
        id: "4",
        name: "海尔兄弟"
      }
    ],
    albums: [
      [{
        id: "1001",
        name: "歌曲1001",
        price: 100
      }, {
        id: "1002",
        name: "歌曲1002",
        price: 100
      }, {
        id: "1003",
        name: "歌曲1003",
        price: 100
      }],
      [{
        id: "2001",
        name: "歌曲1001",
        price: 200
      }, {
        id: "2002",
        name: "歌曲1002",
        price: 200
      }, {
        id: "2003",
        name: "歌曲1003",
        price: 200
      }],
      [{
        id: "3001",
        name: "歌曲1001",
        price: 300
      }, {
        id: "3002",
        name: "歌曲1002",
        price: 300
      }, {
        id: "3003",
        name: "歌曲1003",
        price: 300
      }]
    ]
  },
  btnOKTapHandler(event) {
    console.log('按钮被点击：', event);
    if (this.data.titleColor == "black") {
      this.setData({
        titleColor: "orange"
      });
    } else {
      this.setData({
        titleColor: "black"
      });
    }
    console.log("切换颜色：", this.data.titleColor);
  },
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  // 生命周期函数
  onLoad(options) {
    console.log("onLoad:", options);
    setInterval(args => {
      this.setData({
        nowTime: new Date().toLocaleString()
      });
    }, 1000);
  },
  onPullDownRefresh() {
    // 1.发送GET请求，即使返回的状态码为404也会执行success回调函数。。。
    wx.request({
      url: 'http://localhost:5000/api/Student/Get?id=1',
      method: "GET",
      success: res => {
        console.log("请求学生信息成功：", res);
      },
      complete: res => {
        console.log("请求学生信息完成：", res);
      }
    });
    // 2.发送POST请求
    wx.request({
      url: 'http://localhost:5000/api/Student/Add',
      method: "POST",
      data: {
        Id: 1001,
        FirstName: "li",
        LastName: "qian",
        Birthday: "1990-10-26"
      },
      success: res => {
        console.log("添加学生信息成功：", res);
      }
    })
    const test = util.formatTime(new Date());
    console.log(test);
    // 3.使用封装的网络请求函数发送请求
    network.request({
        url: "http://localhost:5000/api/Student/GetAll",
        method: "GET"
      })
      .then(res => {
        console.log('promise请求成功：', res)
      })
      .catch(res => {
        console.log('promise请求失败：', res)
      });
  },
  onShareAppMessage() {
    return {
      title: "MiniProgram-1",
      path: "/pages/home/home",
      imageUrl: "http://pic231.nipic.com/file/20190730/9773031_122447735081_2.jpg"
    }
  },
  showToast() {
    wx.showToast({
      title: '你好啊，李银河',
      icon: 'success',
      // image:'/assets/image/icon.png'
      duration: 3000,
      mask: true,
      success: () => {
        console.log('showToast成功')
      },
      fail: () => {
        console.log('showToast失败')
      },
      complete: () => {
        console.log('showToast完成')
      }
    })
  },
  showModal() {
    wx.showModal({
      title: '提示',
      content: '确定删除该条记录吗？',
      success: res => {
        console.log('showModal成功', res);
      }
    })
  },
  showLoading() {
    wx.showLoading({
      title: '正在处理中...',
      mask: true,
      success: () => {
        console.log('showLoading成功');
      }
    });
    // showLoading只能手动关闭，一般是请求完成之后去执行hideLoading()
    setTimeout(() => {
      wx.hideLoading();
    }, 2000);
  },
  showActionSheet() {
    wx.showActionSheet({
      itemList: ['拍照', '从相册选择'],
      itemColor: 'red',
      success: res => {
        console.log('您选择了：', res);
      }
    })
  }
})