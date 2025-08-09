const IUserController = require("./IUserController.js");
const config = require("../config.js");
const UserDAO = require("../persistencelayer/dao/" + config.IUserDAO);
let userdao = new UserDAO();

class UserController extends IUserController {
  constructor() {
    super();
  }

  async show(req, res) {
    try {
      let users = await userdao.recovery();
      return res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      return res.status(500).json({ message: "Internal Server Error" });
  } }

  async store(req, res) {
    try {
      const user = await userdao.create(req);
      return res.status(201).json(user);
    } catch (error) {
      console.error("Error creating user:", error);
      return res.status(500).json({ message: "Internal Server Error" });
  } }

  async destroy(req, res) {
    try {
      let user = await userdao.delete(req);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.json({ message: "User deleted successfully", user });
    } catch (error) {
      console.error("Error deleting user:", error);
      return res.status(500).json({ message: "Internal Server Error" });
  } }

  async update(req, res) {
    try {
      let user = await userdao.update(req);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.json(user);
    } catch (error) {
      console.error("Error updating user:", error);
      return res.status(500).json({ message: "Internal Server Error" });
  } }

  async index(req, res) {
    try {
      let users = await userdao.search(req);
      return res.json(users);
    } catch (error) {
      console.error("Error searching users:", error);
      return res.status(500).json({ message: "Internal Server Error" });
} } }

module.exports = UserController;