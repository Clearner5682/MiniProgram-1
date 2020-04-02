const network = require('./utils/network.js');

App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    var token = wx.getStorageSync("token");
    if (!token) { // 本地没有token，掉登录接口
      this.login();
    } else { // 校验token的有效性？
      network.request({
        url: 'http://localhost:5000/api/Auth/CheckToken?token=' + token,
        method:'POST'
      })
      .then(res=>{
        this.globalData.token = loginRes.data.token;// 把token放到全局变量，所有页面都能访问
        wx.setStorageSync("token", loginRes.data.token);
      })
      .catch(res=>{
        this.login();
      });
    }
  },
  globalData: {
    userInfo: null,
    token:''
  },
  login() {
    wx.login({
      success: res => {
        const code = res.code;
        wx.request({
          url: 'http://localhost:5000/api/Auth/LoginWX?code=' + code,
          method: "POST",
          success: loginRes => {
            this.globalData.token=loginRes.data.token;// 把token放到全局变量，所有页面都能访问
            wx.setStorageSync("token", loginRes.data.token);
          },
          fail: loginRes => {
            console.log(loginRes);
          }
        })
      }
    })
  }
})