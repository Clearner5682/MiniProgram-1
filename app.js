//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    var token = wx.getStorageSync("token");
    if (!token) {// 本地没有token，掉登录接口
      wx.login({
        success: res => {
          const code = res.code;
          wx.request({
            url: 'http://localhost:5000/api/Auth/LoginWX?code=' + code,
            method: "POST",
            success: loginRes => {
              wx.setStorageSync("token",loginRes.data.token);
            },
            fail: loginRes => {
              console.log(loginRes);
            }
          })
        }
      })
    }else{// 校验token的有效性？

    }
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})