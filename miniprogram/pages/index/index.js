var config = require('../../config/config.js');
const App = getApp()

Page({
  data: {
    categories: [{
      "id": "0",
      "name": "琴叶榕"
    }, {
      "id": "1",
      "name": "芭比榕"
    }, {
      "id": "2",
      "name": "乒乓菊"
    }, {
      "id": "3",
      "name": "钮扣蕨"
    }, {
      "id": "4",
      "name": "龟背竹"
    }, {
      "id": "5",
      "name": "春雨"
    }, {
      "id": "6",
      "name": "小苹果"
    }, {
      "id": "7",
      "name": "康乃馨"
    }, {
      "id": "8",
      "name": "石竹"
    }, {
      "id": "9",
      "name": "富贵荣"
    }, {
      "id": "10",
      "name": "保罗"
    }, {
      "id": "11",
      "name": "狼尾蕨"
    }],
    categoryIndex: 0,
    itemWidth: '',
    products: [{
        "id": "1",
        "name": "琴叶榕150#三株",
        "price": "12.00",
        "image": {
          "url": "../../assets/images/products/qyr.jpg"
        }
      }, {
        "id": "2",
        "name": "琴叶榕150#单株多头",
        "price": "12.00",
        "image": {
          "url": "../../assets/images/products/qyr.jpg"
        }
      }, {
        "id": "3",
        "name": "琴叶榕150#单株",
        "price": "12.00",
        "image": {
          "url": "../../assets/images/products/qyr.jpg"
        }
      }, {
        "id": "4",
        "name": "芭比榕110#",
        "price": "12.00",
        "image": {
          "url": "../../assets/images/products/qyr.jpg"
        }
      }, {
        "id": "5",
        "name": "乒乓菊140#",
        "price": "12.00",
        "image": {
          "url": "../../assets/images/products/qyr.jpg"
        }
      }, {
        "id": "6",
        "name": "琴叶榕140#",
        "price": "12.00",
        "image": {
          "url": "../../assets/images/products/qyr.jpg"
        }
      }, {
        "id": "7",
        "name": "春雨",
        "price": "12.00",
        "image": {
          "url": "../../assets/images/products/qyr.jpg"
        }
      }, {
        "id": "8",
        "name": "小苹果",
        "price": "12.00",
        "image": {
          "url": "../../assets/images/products/qyr.jpg"
        }
      }, {
        "id": "9",
        "name": "保罗",
        "price": "12.00",
        "image": {
          "url": "../../assets/images/products/qyr.jpg"
        }
      }, {
        "id": "10",
        "name": "康乃馨",
        "price": "12.00",
        "image": {
          "url": "../../assets/images/products/qyr.jpg"
        }
      }, {
        "id": "11",
        "name": "富贵荣",
        "price": "12.00",
        "image": {
          "url": "../../assets/images/products/qyr.jpg"
        }
      }, {
        "id": "12",
        "name": "钻石翡翠",
        "price": "12.00",
        "image": {
          "url": "../../assets/images/products/qyr.jpg"
        }
      }, {
        "id": "13",
        "name": "钮扣蕨",
        "price": "12.00",
        "image": {
          "url": "../../assets/images/products/qyr.jpg"
        }
      }

    ]
  },
  onCategoryTap: function(e) {

    wx.showModal({
      title: '提示',
      content: e.currentTarget.dataset.id
    })
  },
  onProductTap: function(event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/goods/index?id=' + id
    });
  },
  onLoad: function() {
    var self = this;
    wx.getSystemInfo({
      success: function(res) {
        self.setData({
          itemWidth: (res.screenWidth - 40) / 2 + 'px'
        });
      }
    });
  }
})