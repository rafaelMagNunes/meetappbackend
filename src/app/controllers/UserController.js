import User from '../models/User';
import UpdateUserService from '../services/UpdateUserService';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async update(req, res) {
    const { email, old_password } = req.body;

<<<<<<< HEAD
    const user = await UpdateUserService.run({
=======
    const { id, name, userEmail } = await UpdateUserService.run({
>>>>>>> 24fd3e04200558db87aa3fe74ae6ede716abbdc7
      body: req.body,
      user_id: req.userId,
      email,
      old_password,
<<<<<<< HEAD
=======
    });

    return res.json({
      id,
      name,
      email: userEmail,
>>>>>>> 24fd3e04200558db87aa3fe74ae6ede716abbdc7
    });

    return res.json(user);
  }
}

export default new UserController();
