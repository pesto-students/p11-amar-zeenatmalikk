var uppercaseRegex = /[A-Z]/;
const isStrongPassword = (password) => {
  if (password.length > 8) {
    console.log('password length is greater than 8')
    return true;
  } else if (!password.includes("password")) {
    console.log('password does not contain "password"')
    return true
  } else if (uppercaseRegex.test(password)) {
    return true
  }else{
    return false
  }
};
isStrongPassword('password')
