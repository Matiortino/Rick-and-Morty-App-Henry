const express = require('express');
const router = express.Router();

const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const postUser = require("../controllers/postUsers");

router.get('/login/', login);
router.post("/login", postUser);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);
router.get('/character/:id', getCharById);

module.exports = router;