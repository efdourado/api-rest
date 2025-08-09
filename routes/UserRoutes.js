const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const IRoutes = require('./IRoutes.js');
const config = require('../config.js');
const UserController = require('../controllers/' + config.IUserController);
const userController = new UserController();
const app = express();

class UserRoutes extends IRoutes {
  constructor() {
    super();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('public'));
    
    this.setupRoutes();
  }

  setupRoutes() {
    app.get('/', (req, res) => {
      res.send('Rest API com Polimorfismo');
    });

    app.get('/user', userController.show);
    app.get('/user/search/', userController.index);
    app.post('/user', userController.store);
  }

  listen() {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
} }

module.exports = UserRoutes;