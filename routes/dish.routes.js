const { Router } = require('express');
const { dishesPut, dishesGet, dishesPost, dishesDelete } = require('../controllers/dish');
const router = Router();

router.get('/', dishesGet )

router.put('/:id', dishesPut)

router.post('/', dishesPost)

router.delete('/:id', dishesDelete)


module.exports = router;