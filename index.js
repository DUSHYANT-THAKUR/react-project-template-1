const express = require('express');
const cors = require('cors');
const routes = require('./router/route');
const app = express();
const port = 8080;

const allowedOrigins = [
  'http://localhost:3000',
  'https://elegant-kitsune-85a9bf.netlify.app',
  'https://api.render.com/deploy/srv-cpldbsf109ks73dqla1g?key=Xfx-YqJ-NBk',
  'https://react-project-template-1-1.onrender.com'
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
  }

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log('running on port ' + port);
});
