const router = require('express').Router();

const {HomeControler} = require('../controllers');

router.get('/', HomeControler.index);
router.get('/about', HomeControler.about);
router.get('/quotes', HomeControler.quotes);
router.get('/quotes/all', HomeControler.get);
router.post('/quotes/', HomeControler.add);

module.exports = router;
