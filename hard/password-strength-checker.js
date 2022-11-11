/**
 * Problem statement:
 *  since a password can be letters, digits,
 *  this functions is responsible for the following:
 *  1. if the password length is less, even if it's all repeating characters only insertion is needed.
 *  2. if the password length is 4, like '....', two insertions are 1 replacement are needed.
 *  3. if the password length is 5, like '.....', one insertion is needed, and might need two replacements.
 *  4. For the cases that length is less than 6: Math.max(requiredCharacters, 6 - password.length()
 *  5. For the case 6 <= length <= 20, only replacements are needed,
 *
 *  6. if the length is greater than 20, replacements and deletions will be needed.
 *     6.1 for the case of a repeated substring which length is a multiple of 3 + 1, then one deletion will be needed, and
 *         will save a replacement to fix it.
 *     6.2 for the case of repeating a substring which length is a multiple of 3 + 2, three deletions will be needed, and
 *         will save a replacement to fix it.
 *
 * @param password
 *
 * @notice - this algorithm was initially written in Java.
 * this is how i solved the problem with this algorithm.
 * the password strength algorithm is responsible for the following:
 * 1. it initializes the variable numRequiredChars to the value of
 *    getRequiredCharCount, then passes in the password.
 *
 * 2. if the length of the password is less than 6
 *    2.1 call the max function from the Math object. and pass in the number of requiredCharacters, then
 *         subtract 6 from the length of the password.
 * 3. it initializes the variables replaces, ones, and twos and set them all to 0.
 * 4. then initialize numRepeatedChars and set it to the value of 1.
 *
 * 5. create a for loop for i is equal to zero, while i is less than password.length then increment the value of i by one.
 *
 *
 */

const passwordStrength = (password) => {
    let numRequiredChars = getRequiredCharCount(password);

    if (password.length < 6) {
        return Math.max(numRequiredChars, 6 - password.length);
    }

    let replaces = 0,
        ones = 0,
        twos = 0;

    let numRepeatedChars = 1;

    for (let i = 0; i < password.length; i++) {

        while (i + numRequiredChars < password.length &&
            password.charAt(i + numRepeatedChars) === password.charAt(i + numRepeatedChars - 1)) {
            numRepeatedChars++;

            if (numRepeatedChars >= 3) {
                replaces += numRepeatedChars / 3
            }

            if (numRepeatedChars % 3 === 0)
                ones += 1

            if (numRepeatedChars % 3 === 1)
                twos += 2
        }

        i += numRepeatedChars
    }

    if (password.length <= 20) {
        return Math.max(numRepeatedChars, replaces)
    }

    let deletions = password.length - 20
    replaces -= Math.min(Math.max(deletions - ones, 0), twos) / 2
    replaces -= Math.max(deletions - ones - twos, 0) / 3

    return deletions + Math.max(numRepeatedChars, replaces)
}

passwordStrength('');


/**
 *  How does this function work?
 *  1. it initializes the lowercase to the password in lowercase letters
 *  2. it initializes the uppercase to the password in uppercase letters
 *  3. it initializes the variable digit to the value of 1
 *  4. Then it create a for in loop, where the password is turned into an array.
 *  5. then it checks the password and looks for lowercase letters if one is found simple return lowercase.
 *  6. then it checks the password and looks for uppercase letters if one is found simple return uppercase.
 *  7. else check to see if it is a digit if so, return the digit itself.
 *  8. the function returns a digit.
 * @param password
 * @returns {string|number}
 */


const getRequiredCharCount = (password) => {
    let lowercase = password.toLowerCase();
    let uppercase = password.toUpperCase();
    let digit = 1

    for (let c in password.toArray()) {
        if (password.contains(lowercase, c)) {
            return lowercase
        } else if (password.contains(uppercase, c)) {
            return uppercase
        } else if (password.contains(digit, c)) {
            return digit = 0
        }
    }

    return digit
}