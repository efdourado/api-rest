const IUserDAO = require("./IUserDAO.js");
const User = require("../models/User");

class UserDAO_Mongoose extends IUserDAO {
  constructor() {
    super();
  }

  async create(req) {
    return await User.create(req.body);
  }

  async recovery() {
    return await User.find();
  }

  async update(req) {
    return await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  }

  async delete(req) {
    return await User.findByIdAndRemove(req.params.id);
  }

  async search(req) {
    return await User.find({ email: req.query.email });
} }

module.exports = UserDAO_Mongoose;