// components/cpn-counter/cpn-counter.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    counter:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // counter+1
    increase(){
      this.setData({counter:this.data.counter+1});
      this.triggerEvent("getCounter",{counter:this.data.counter})
    }
  }
})
