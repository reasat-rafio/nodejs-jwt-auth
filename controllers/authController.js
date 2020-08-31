const User = require("../models/User");

//handle error
const handleError = (err) => {
  //   console.log(err.message, err.code);
  let errors = {
    email: "",
    password: "",
  };

  //@decs   if someone try to signup with same email twice
  if (err.code === 11000) {
    errors.email = "This email is already registered";
    return errors;
  }

  //validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

// ! Signup
// ? @method    GET
module.exports.signup_get = (req, res) => {
  res.render("signup");
};

// ! Login
// ? @method    GET
module.exports.login_get = (req, res) => {
  res.render("login");
};

// ! Signup
// ? @method    POST
module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({
      email,
      password,
    });
    res.status(201).json(user);
  } catch (err) {
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
};

// ! Login
// ? @method    POST
module.exports.login_post = async (req, res) => {
  const { email, pass } = req.body;
  console.log(req.body);
  res.send("user login");
};
