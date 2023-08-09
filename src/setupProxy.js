const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy('/api1',{   //有api1前缀触发代理
            target:'http://localhost:5000', //请求转发给谁
            changeOrigin:true,  // 控制服务端请求头Host的值 一般为true不让服务端知道请求地址
            // pathRewrite:{'/^api1':''} //重写请求路径  
            // 如果不写服务端收到的请求是 /api1/....  而不是 /....
        })
    )
}