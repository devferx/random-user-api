const { genrateRandomNumber } = require("./random");

function avatarIdValidator(id) {
  if (id >= 1 && id <= 106) {
    return id;
  }

  return genrateRandomNumber(1, 106);
}

module.exports = { avatarIdValidator };
