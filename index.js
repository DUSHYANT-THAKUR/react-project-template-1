const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./router/route');
const port = 8080;

const allowedOrigins = [
  'https://dushyant-thakur-web-app.netlify.app' // Your live front-end domain
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
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log('running on port ' + port);
});
