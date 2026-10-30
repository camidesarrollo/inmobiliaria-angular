const User = require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require('../../config/properties');

const EXPIRES_IN = 24 * 60 * 60;

const buildDataUser = (user) => ({
  name: user.name,
  email: user.email,
  accessToken: jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: EXPIRES_IN }),
  expiresIn: EXPIRES_IN
});

exports.createUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });
    res.send({ dataUser: buildDataUser(user) });
  } catch (err) {
    if (err.code === 11000) return res.status(409).send('Email already exists');
    throw err;
  }
};

exports.loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const passwordOk = user && await bcrypt.compare(req.body.password, user.password);
  if (!passwordOk) {
    return res.status(409).send({ message: 'Something is wrong' });
  }
  res.send({ dataUser: buildDataUser(user) });
};

exports.getUsuarios = async (req, res) => {
  const usuarios = await User.find().select('-password');
  res.json(usuarios);
};

exports.editUser = async (req, res) => {
  const cambios = { ...req.body };
  if (cambios.password) cambios.password = await bcrypt.hash(cambios.password, 10);
  const user = await User.findByIdAndUpdate(req.params.id, { $set: cambios }, { returnDocument: 'after', runValidators: true });
  if (!user) return res.status(404).json({ status: 'User not found' });
  res.json({ status: 'User Updated' });
};

exports.deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ status: 'User not found' });
  res.json({ status: 'User Deleted' });
};
