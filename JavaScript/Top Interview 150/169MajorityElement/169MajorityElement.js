/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  function countOccurrences(arr) {
      return arr.reduce((acc, val) => {
          acc[val] = (acc[val] || 0) + 1;
          return acc;
      }, {});
  }

  let keyValueObj = countOccurrences(nums);
  let majoElem = { elem: null, qtde: 0 };

  function setMajo(keyAndQtd) {
      let [key, qtde] = keyAndQtd;
      if (qtde > majoElem.qtde) {
          majoElem.elem = key
          majoElem.qtde = qtde
      }
      return key
  }

  const result2 = Object.groupBy(Object.entries(keyValueObj), setMajo);
  return parseInt(majoElem.elem)
};