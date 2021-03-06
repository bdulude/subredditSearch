var express = require('express');
var router = express.Router();

router.use(express.static(__dirname + '/public'));

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Subreddit Search' });
});


router.get('/r/:subreddit', function(req, res, next) {
    res.render('index', { title: 'Subreddit Search', subreddit: req.params.subreddit });
});



module.exports = router;
