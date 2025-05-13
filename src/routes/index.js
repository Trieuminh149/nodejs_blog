const siteRoutes = require('./site'); // ví dụ trong app.js
module.exports = function (app) {
    app.get('/search', (req, res) => {
      res.render('search');
    });
    app.get('/chat-app', (req, res) => {
    res.render('chatapp'); // render file views/chat.handlebars
    });
   //app.get('/', (req, res) => {
     // res.render('home');
   //});
    app.use('/', siteRoutes);
  };
  