/**
 * Creates a frequency counter object from an array.
 * @param {Array} arr - Any array
 * @returns {Object} Frequency counter object
 */
function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
  }
  
  /**
   * Finds the mode (most frequent value) in an array.
   * @param {Array} arr - Any array
   * @returns {number|string} The mode of the array
   */
  function findMode(arr) {
    let freqCounter = createFrequencyCounter(arr);
  
    let count = 0;
    let mostFrequent;
  
    for (let key in freqCounter) {
      if (freqCounter[key] > count) {
        mostFrequent = key;
        count = freqCounter[key];
      }
    }
  
    // Return the mode without converting to number
    return mostFrequent;
  }
  
  /**
   * Converts an array of string numbers to an array of numbers and validates the conversion.
   * @param {Array} numsAsStrings - Array of string numbers
   * @returns {Array|Error} An array of numbers or an Error object if conversion fails
   */
  function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];
  
    for (let i = 0; i < numsAsStrings.length; i++) {
      let valToNumber = Number(numsAsStrings[i]);
  
      if (Number.isNaN(valToNumber)) {
        return new Error(
          `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
        );
      }
  
      result.push(valToNumber);
    }
    return result;
  }
  
  /**
   * Finds the mean (average) of an array of numbers.
   * @param {Array} nums - Array of numbers
   * @returns {number} The mean of the array
   */
  function findMean(nums) {
    if (nums.length === 0) return 0;
    return nums.reduce(function (acc, cur) {
      return acc + cur;
    }, 0) / nums.length;
  }
  
  /**
   * Finds the median (middle value) of an array of numbers.
   * @param {Array} nums - Array of numbers
   * @returns {number} The median of the array
   */
  function findMedian(nums) {
    nums.sort((a, b) => a - b);
  
    let middleIndex = Math.floor(nums.length / 2);
    let median;
  
    if (nums.length % 2 === 0) {
      median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    } else {
      median = nums[middleIndex];
    }
    return median;
  }
  
  module.exports = {
    createFrequencyCounter,
    findMean,
    findMedian,
    findMode,
    convertAndValidateNumsArray
  };
  