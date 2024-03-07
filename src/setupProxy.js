const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api/v1/user", {
      target:
        "https://resume-builder-backend-obvm1ecln-varunwalis-projects.vercel.app",
      changeOrigin: true,
    })
  );
};
