const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: 'http://ec2-3-34-183-60.ap-northeast-2.compute.amazonaws.com:5000',
      changeOrigin: true,
    })
  );
};
