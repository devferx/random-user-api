const { Router } = require("express");
const { faker } = require("@faker-js/faker");

const { url } = require("../config");
const { avatarIdValidator } = require("../utils/avatar-id-validator");

const router = Router();

router.get("/", (req, res) => {
  const limit = Number(req.query.limit) || 20;
  const offset = Number(req.query.offset) || 0;

  const results = new Array(limit).fill(null).map((_, i) => {
    const gender = faker.name.gender(true);
    const firstName = faker.name.firstName(gender.toLocaleLowerCase());
    const lastName = faker.name.lastName(gender.toLocaleLowerCase());
    const prefix = faker.name.prefix(gender.toLocaleLowerCase());
    const fullName = `${prefix} ${firstName} ${lastName}`;

    return {
      id: faker.datatype.uuid(),
      email: faker.internet.email(),
      name: {
        fullName,
        firstName,
        lastName,
        prefix,
      },
      gender,
      description: faker.lorem.sentence(),
      avatar: `${url}/static/memoji-${avatarIdValidator(i + offset + 1)}.png`,
      email: faker.internet.email(),
    };
  });

  res.json({
    limit,
    offset,
    length: results.length,
    results,
  });
});

module.exports = router;
