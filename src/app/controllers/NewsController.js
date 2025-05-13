class NewsController {
    home(req, res) {
        res.render('/');
    }

    search(req, res) {
        res.render('search');
    }

    chat(req, res) {
        res.render('chatapp');
    }
}

module.exports = new NewsController;
