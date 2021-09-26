const router = require("express").Router();
const User = require("../models/User");

const auth = require('../middleware/auth')

router.post("/register", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

//Login User and generate token
router.post('/login', async (req, res) => {
  try {
      const user = await User.findByCredentials(req.body.username, req.body.password)
      // const user = await User.findOne({ username: req.body.username })
      const token = await user.generateAuthToken();
      res.status(200).send({ user, token })
  } catch (e) {
      res.status(400).send({
        error: { message: 'You have entered an invalid username or password!' }
      })
  }
})

//Logout All Users from all tokens
router.post('/logoutAll', auth, async (req, res) => {
  try {
      req.user.tokens = []
      await req.user.save()

      res.send()
  } catch (e) {
      res.status(500).send()
  }
})

module.exports = router;
