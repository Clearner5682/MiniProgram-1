// components/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表，用于接收页面传过来的数据
   */
  properties: {
    title:{
      type:String,
      value:"我是默认标题"
    },
    content:{
      type:String,
      value:"我是默认内容"
    }
  },
  /**
   * 拓展样式，用于接收页面传过来的样式
   */
  externalClasses:[
    "titleclass",
    "contentclass"
  ],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  options:{
    /**
     * 样式隔离级别：isolated(互不影响)、apply-shared(页面样式能影响组件)、shared（组件和页面样式相互影响）
     */
    styleIsolation:"isolated"
  },
  /**
   * 组件的生命周期函数
   */
  lifetimes:{
    // 组件被创建出来
    created:function(){
      console.log('组件被创建')
    },
    // 组件被添加到页面/组件
    attached:function(){
      console.log('组件被添加到页面')
    },
    // 组件渲染出来
    ready:function(){
      console.log('组件渲染出来')
    },
    // 组件被移除
    detached:function(){
      console.log('组件被移除')
    }
  },
  /**
   * 组件所在页面的生命周期函数
   */
  pageLifetimes:{
    // 页面显示
    show:function(){
      console.log('页面显示')
    },
    // 页面隐藏
    hide:function(){
      console.log('页面隐藏')
    }
  }
})
