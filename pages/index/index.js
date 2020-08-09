import { http} from "../../request/inddex"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    categoriesList:[],
    floorList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  // 获取轮播图
  this.getSwiperData()
  this.getCategoriesData()
  this.getFloorData()
  },
  getSwiperData(){
    http("https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata").then((res)=>{
      this.setData({
        swiperList:res.data.message
      })
      return res.data.message
    }).then(s=>{
      // console.log(s)
    })
  },
  getCategoriesData(){
    http("https://api-hmugo-web.itheima.net/api/public/v1/home/catitems").then((res)=>{
      this.setData({
        categoriesList:res.data.message
      })
      return res.data.message
    }).then(s=>{
      // console.log(s)
    })
  },
  getFloorData(){
    http("https://api-hmugo-web.itheima.net/api/public/v1/home/floordata").then((res)=>{
      this.setData({
        floorList:res.data.message
      })
      return res.data.message
    }).then(s=>{
      // console.log(s)
    })
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
    
  }
})