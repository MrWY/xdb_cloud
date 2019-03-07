var apiPrefix = 'https://dev.wemall.com/api';

var config = {
    static: {
        imageDomain: 'https://dev.wemall.com'
    },
    api: {
        reqCategoryList: '/categories',
        reqProductList: '/products',
        reqProductDetail: '/product/:id'
    }
};

for (var key in config.api) {
    config.api[key] = apiPrefix + config.api[key];
}

module.exports = config;