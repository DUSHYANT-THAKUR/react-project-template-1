const express = require('express');
const cors = require('cors');
const routes = require('./router/route');
const app = express();
const port = 8080;

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://thunderous-strudel-cc8e0e.netlify.app', // Your live front-end domain
  'https://dushyant-thakur-web-app.netlify.app' // Another live front-end domain
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin like mobile apps or curl requests
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log('running on port ' + port);
});
