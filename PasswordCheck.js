const { checkPassword, checkPasswordWithoutRegEX } = require('./PasswordCheck');

function checkPassword(password) {
  if (typeof password !== 'string') {
    throw new Error('Password must be a string')
  }
  if(password.length < 8) {
    throw new Error('Password must be at least 8 characters long')  
  }
 if(password.length > 20) {
    throw new Error('Password must be at most 20 characters long')
 }
   
}

function checkPasswordWithoutRegEX(password) {
    if (typeof password !== 'string') 
      throw new Error('Password must be a string')
    if(password.length < 8) 
      throw new Error('Password must be at least 8 characters long')  
   if(password.length > 20) 
      throw new Error('Password must be at most 20 characters long')
     
    if(password.includes('password')) 
      throw new Error('Password cannot contain the word "password"');
    if(password.includes('1234'))
        throw new Error('Password cannot contain a sequence');
}
// Test file for PasswordCheck.js


// Test cases for checkPassword function
test('checkPassword should throw an error if password is not a string', () => {
    expect(() => {
        checkPassword(123456);
    }).toThrow('Password must be a string');
});

test('checkPassword should throw an error if password is less than 8 characters long', () => {
    expect(() => {
        checkPassword('pass');
    }).toThrow('Password must be at least 8 characters long');
});

test('checkPassword should throw an error if password is more than 20 characters long', () => {
    expect(() => {
        checkPassword('thisisaverylongpasswordthatexceeds20characters');
    }).toThrow('Password must be at most 20 characters long');
});

// Test cases for checkPasswordWithoutRegEX function
test('checkPasswordWithoutRegEX should throw an error if password is not a string', () => {
    expect(() => {
        checkPasswordWithoutRegEX(123456);
    }).toThrow('Password must be a string');
});

test('checkPasswordWithoutRegEX should throw an error if password is less than 8 characters long', () => {
    expect(() => {
        checkPasswordWithoutRegEX('pass');
    }).toThrow('Password must be at least 8 characters long');
});

test('checkPasswordWithoutRegEX should throw an error if password is more than 20 characters long', () => {
    expect(() => {
        checkPasswordWithoutRegEX('thisisaverylongpasswordthatexceeds20characters');
    }).toThrow('Password must be at most 20 characters long');
});

test('checkPasswordWithoutRegEX should throw an error if password contains the word "password"', () => {
    expect(() => {
        checkPasswordWithoutRegEX('mypassword');
    }).toThrow('Password cannot contain the word "password"');
});

test('checkPasswordWithoutRegEX should throw an error if password contains a sequence', () => {
    expect(() => {
        checkPasswordWithoutRegEX('1234');
    }).toThrow('Password cannot contain a sequence');
});