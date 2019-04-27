
const bcrypt = require('bcryptjs');

function verifyPassword(userPassword, hash) {
  return bcrypt.compareSync(userPassword, hash);
}

module.exports = {
    verifyPassword
};