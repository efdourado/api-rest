require('dotenv').config();

const config = require('./config.js');
const connectDB = require('./database/connection');
const IRoutes = require('./routes/' + config.IRoutes);

connectDB();

const userRoutes = new IRoutes();

userRoutes.listen();