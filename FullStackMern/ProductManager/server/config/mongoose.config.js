const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://dbUser:root@cluster0.k0mol.mongodb.net/productmanagerDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
