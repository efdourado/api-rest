const IUserController = require('./IUserController.js');
const User = require('../persistencelayer/persistence/User.js');
const config = require('../config.js'); //
const UserDAO = require('../persistencelayer/dao/'+config.IUserDAO);
let userdao = new UserDAO();

class UserControllerEncap extends IUserController{
  constructor(){
    super();
  }

  async show(req, res) {
    let users = await userdao.recovery();
    return res.json(users);
  }

  async store(req, res) {
    const user = new User();
    user.nome = req.body.nome;
    user.email = req.body.email;
    user.password = req.body.password;
    const newUser = await userdao.create(user);
    return res.json(newUser);
  }

  async destroy(req,res){
    const user = new User();
    user.id = req.params.id; 
    let deletedUser = await userdao.delete(user);
    return res.json(deletedUser);
  }

  async update(req,res){
    const user = new User();
    user.id = req.params.id
    user.nome = req.body.nome;
    user.email = req.body.email;
    user.password = req.body.password;
    let updatedUser = await userdao.update(user);
    return res.json(updatedUser);
  }

  async index(req,res) {
    const user = new User();
    user.nome = req.body.nome;
    user.email = req.body.email;
    user.password = req.body.password;
    let users = await userdao.search(user);
    return res.json(users);
} }

module.exports = UserControllerEncap;