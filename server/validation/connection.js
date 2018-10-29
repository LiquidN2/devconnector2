const isEmpty = require('./isEmpty');

const validateConnectionRequest = data => {
  let errors = {};

  // password validation
  if (isEmpty(data.userId)) {
    errors.userId = 'Must provide user id to be added';
  }

  return {
    errors,
    isValid: isEmpty(errors)
};
};

module.exports = validateConnectionRequest;
