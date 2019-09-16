const router = require('express').Router();
const { auth } = require('./auth');
const { client, server } = require('./error');
const { renderCities, getAllCities, add } = require('./city');
const { renderSignup, post } = require('./signup');
const { renderLogin, postL } = require('./login');

router.get('/login', renderLogin);
router.get('/signup', renderSignup);
router.post('/signup', post);
router.post('/login', postL);

router.use(auth);

router.get('/cities', renderCities);
router.get('/all-cities', getAllCities);
router.post('/add-city', add);

router.use(client);
router.use(server);

module.exports = router;
