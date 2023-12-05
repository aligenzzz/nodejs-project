const Router = require('express')
const router = Router()
const animalController = require('../controllers/animalController')

router.get('/', animalController.getAll)
router.get('/:id', animalController.get)
router.post('/', animalController.create)
router.put('/:id', animalController.edit)
router.delete('/:id', animalController.delete)

module.exports = router