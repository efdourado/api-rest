const IUserDAO = require('./IUserDAO.js');
const User = require('../models/User');
const objUser = require('../persistence/User.js');
const objuser = new objUser();

class UserDAO_Encap_Mongoose extends IUserDAO {
  constructor() {
    super();
  }

  async create(objuser) {
    return await User.create(objuser.toJSON());
  }

  async recovery() {
    return await User.find();
  }

  async update(objUser) {
    return await User.findByIdAndUpdate(objuser.id, objuser.toJSON(), { new: true });
  }

  async delete(objUser) {
    return await User.findByIdAndRemove(objuser.id);
  }

  async search(objUser) {
    return await User.find({ email: objuser.email });
} }

module.exports = UserDAO_Encap_Mongoose;