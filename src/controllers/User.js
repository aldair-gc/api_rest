import User from '../models/User';

class UserController {
  // Store / Create
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (err) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (err) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID nao enviado'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          erros: ['Usuario inexistente'],
        });
      }

      const updatedUser = await user.update(req.body);

      return res.json(updatedUser);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID nao enviado'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario inexistente'],
        });
      }

      await user.destroy();
      return res.json(user);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }
}

export default new UserController();
