/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let newArr = nums.map((item, index) => {
    
    if (item === val) {
      while (nums[nums.length - 1] === val) nums.pop();
      swapCurrentPositionWithLast(index, nums);
    }
  })
}

var swapElement = function(valPosFrom, valPosTo, arr) {
    [arr[valPosFrom], arr[valPosTo]] = [arr[valPosTo], arr[valPosFrom]];
  }

var swapCurrentPositionWithLast = function(valPosFrom, arr) {
    arr[valPosFrom] = null;
    swapElement(valPosFrom, arr.length - 1, arr);
    arr.pop();
  }