const userRepository = require('../repository/userRepository');
const jwt = require('jsonwebtoken');
const SECRET = 'supersecret';

module.exports = {
  login: (username, password) => {
    if (!username || !password) throw new Error('Login e senha devem ser informados');
    const user = userRepository.getByUsername(username);
    if (!user || user.password !== password) throw new Error('Usuário ou senha inválidos');
    const token = jwt.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: '1h' });
    return { token };
  },
  verifyToken: (token) => {
    try {
      return jwt.verify(token, SECRET);
    } catch (err) {
      throw new Error('Token inválido');
    }
  }
};
