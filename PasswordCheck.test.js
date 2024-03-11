function testPasswordStrength(password) {
  try {
    checkPassword(password);
    console.log('Password is strong');
  } catch (error) {
    console.log('Password is weak:', error.message);
  }
}

// Test cases
testPasswordStrength('abc'); // Password is weak: Password must be at least 8 characters long
testPasswordStrength('abcdefgh'); // Password is strong
testPasswordStrength('abcdefghijabcdefghijabcdefghij'); // Password is weak: Password must be at most 20 characters long
testPasswordStrength(12345678); // Password is weak: Password must be a string