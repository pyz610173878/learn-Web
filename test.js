const http = require('http');

const hostname = '0.0.0.0';  // 监听的 IP 地址，0.0.0.0 表示任意计算机都可以访问
const port = 7070;  // 监听的端口号

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello, World!</h1>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});