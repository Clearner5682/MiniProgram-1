const request=function Request(options){
  return new Promise(function(resolve,reject){
    const reqOptions={
      url:options.url,
      method:options.method||"GET",
      data:options.data||{},
      dataType:options.dataType||"json",
      header:options.header||{"content-type":"application/json"},
      success:resolve,
      fail:reject
    }

    wx.request(reqOptions);
  });
}

module.exports={
  request:request
}