var express = require('express');
var compression = require('compression');
var app = express();
const PORT = process.env.PORT || 3000;

if (PORT !== 3000) {
  app.use(compression());
}

app
  .use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
      res.redirect('http://' + req.hostname + req.url);
    } else {
      next();
    }
  });

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});