const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Name validation
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Довжина імені має бути від 2 до 30 символів";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Поле імені обов'язкове";
  }

  // Email validation
  if (Validator.isEmpty(data.email)) {
    errors.email = "Поле електронної адреси обов'язкове";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Електронна адреса недійсна";
  }

  // Password validation
  if (Validator.isEmpty(data.password)) {
    errors.password = "Поле пароля обов'язкове";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Довжина пароля має бути від 6 до 30 символів";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Поле підтвердження пароля обов'язкове";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Паролі мають співпадати";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
