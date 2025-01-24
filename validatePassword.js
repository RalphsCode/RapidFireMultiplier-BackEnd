/** 
 * Password must be at least 8 characters long and include:
 * At least one uppercase letter
 * At least one lowercase letter 
 * At least one number
 * At least one special character (e.g., !@#$%)
 */

function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }
  
  module.exports = validatePassword;
  