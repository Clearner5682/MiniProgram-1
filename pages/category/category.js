Page({
  data: {
    titleColor:"green",
    fontSize:20
  },
  touchstartHandler(){
    console.log("touchstartHandler");
  },
  touchmoveHandler(){
    console.log("touchmoveHandler");
  },
  touchendHandler(){
    console.log("touchendHandler");
  },
  tapHandler(event){
    console.log("tapHandler");
    const dataset=event.currentTarget.dataset;
    console.log("name:",dataset.name);
    console.log("index:",dataset.index);
  },
  longpressHandler(){
    console.log("touchlongpressHandler");
  }
})