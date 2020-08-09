export const http =(url,data,...params)=>{
    return new  Promise((resolve,reject)=>{
        wx.request({
          url: url,
          data: data,
         ...params,
          success: (result) => {
            resolve(result)
          },
          fail: (err) => {
              reject(err)
          },
         
        })
    })
} 