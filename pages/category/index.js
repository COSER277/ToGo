// pages/category/index.js
import {
  http
} from "../../request/inddex"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateList: [], //接口总数据
    leftList: [], //左侧
    rightList: [], //右侧
    currentIndex: 0,
    scrollTop:0 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //缓存数据
    const cates = wx.getStorageSync('cates')
    if (!cates) {
      this.getData()
    } else {
      //有旧数据
      if (Date.now() - cates.time > 60 * 1000 * 10) {
        //过期
        //重新请求数据
        this.getData()
      } else {
        //未过期
        this.setData({
          cateList: cates.data
        })
        let leftList = this.data.cateList.map(v => v.cat_name);
        let rightList = this.data.cateList[0].children
        this.setData({
          leftList: leftList,
          rightList: rightList
        })
      }
    }

  },
  getData() {
    http("https://api-hmugo-web.itheima.net/api/public/v1/categories").then((res) => {
      wx.setStorageSync('cates', {
        time: Date.now(),
        data: res.data.message
      })
      this.setData({
        cateList: res.data.message
      })
      return res.data.message
    }).then(s => {
      // console.log(s)
      let leftList = s.map(v => v.cat_name);
      let rightList = s[0].children
      this.setData({
        leftList: leftList,
        rightList: rightList
      })
    })
  },
  //点击左侧切换
  handleItemActived(e) {
    const {
      index
    } = e.currentTarget.dataset
    let rightList = this.data.cateList[index].children
    this.setData({
      currentIndex: index,
      rightList: rightList,
      scrollTop:0
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