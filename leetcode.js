// Check if the Sentence is a panagram
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  return new Set(sentence).size == 26;
};

// Remove Vowels from a String
/**
 * @param {string} s
 * @return {string}
 */
const removeVowels = (s) => s.replace(/[aeiou]/gi, "");

// Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
