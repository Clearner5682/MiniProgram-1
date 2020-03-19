// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"我是标题1",
    content:"我是内容1",
    tabItems:[
      {id:"1",name:"流行"},
      {id:"2",name:"新款"},
      {id:"3",name:"精选"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getCounter(event){
    console.log("执行getCounter事件：",event);
  },
  updateCounter(){
    // 1.获取组件
    const cpn=this.selectComponent("#cpn-counter");
    // 2.直接修改data
    // cpn.setData({counter:cpn.data.counter+10});
    // 3.通过调用方法修改data
    cpn.increase();
  },
  getCurrentPage(){
    const currentPage=getCurrentPages()[0];
    console.log(currentPage);
  },
  getActiveIndex(event){
    console.log("执行getActiveIndex事件：",event);
  }
})