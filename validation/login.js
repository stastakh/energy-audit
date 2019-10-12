const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Email validation
  if (!Validator.isEmail(data.email)) {
    errors.email = "Електронна адреса недійсна";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Поле електронної адреси обов'язкове";
  }

  // Password validation
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Довжина пароля має бути від 6 до 30 символів";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Поле пароля обов'язкове";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
