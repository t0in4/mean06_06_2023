const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/CrudDB', { useNewUrlParser: true}).then(
    () => {console.log('Database is connected.')},
    err => {console.log('Can not connect to the database' + err)}
);

module.exports = mongoose;