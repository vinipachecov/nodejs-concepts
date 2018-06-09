jest.setTimeout(30000);


require('../models/User');

const mongoose = require('mongoose');
const keys = require('../config/keys');

//Tell mongoose to use nodejs promise module
mongoose.Promise = global.Promise;
// avoid deprecation warning with useMongoClient
mongoose.connect(keys.mongoURI,{ useMongoClient: true });