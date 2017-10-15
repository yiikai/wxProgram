function requesturl(requrl,callback)
{
  wx.request({
    url: requrl, //仅为示例，并非真实的接口地址
    header: {
        'content-type': 'application/json' // 默认值
      },
    success: callback
    })
}

module.exports = {
  requesturl: requesturl,

}

