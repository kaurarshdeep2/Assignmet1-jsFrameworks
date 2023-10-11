var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'My Portfolio Website' });
});

/* GET projects page. */
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'My Projects' });
});

/* GET contact page. */
router.get('/contactme', function (req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

/* GET about page. */
router.get('/aboutme', function (req, res, next) {
  res.render('about', { title: 'About Arshdeep Kaur' });
});

module.exports = router;
