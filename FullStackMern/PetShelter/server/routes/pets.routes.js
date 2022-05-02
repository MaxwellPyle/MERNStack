const PetController = require('../controllers/pets.controller');

module.exports = app => {
    app.get('/api/pets', PetController.findAllPets)
    app.get('/api/pets/:id', PetController.getOnePet)
    app.post('/api/pets/create', PetController.createPet)
    app.put('/api/pets/edit/:id', PetController.updateExistingPet)
    app.delete('/api/pets/delete/:id', PetController.deleteExistingPet)
}