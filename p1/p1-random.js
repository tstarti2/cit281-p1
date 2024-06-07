/* 
CIT 281 Project 1
Name: Tyler Startin
*/

// Generates a random string with a length between 5 and 25 characters using the English alphabet

/** Returns a random number between min (inclusive) and max (exclusive)
 * @type {number}
 */
function getRandomInteger (min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  
  /**
   * Generates a random string using the English alphabet
   * @return {string} A random string
   */
  function generateString () {
    // Alphabet to choose characters from
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    // Length of the random string to generate, between 5 (inclusive) and 26 (exclusive)
    let stringLength = getRandomInteger(5, 26)
    // Empty string to append selected characters to
    let randomString = ''
    // Loop through the desired length of the random string
    for (let i = 0; i < stringLength; i++) {
      // Pick a random index in the alphabet
      let alphabetIndex = getRandomInteger(0, alphabet.length)
      // Append the character chosen in alphabetIndex to randomString
      randomString += alphabet.charAt(alphabetIndex)
    }
    // Return the completed random string
    return randomString
  }
  
  // Print the random string to the console
  console.log(generateString()) 
 