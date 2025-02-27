# Remove Element - Documentation

## Problem Statement

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

Consider the number of elements in `nums` which are not equal to `val` as `k`. To get accepted, the function should:

- Modify `nums` such that the first `k` elements contain elements that are not equal to `val`.
- The remaining elements beyond `k` are not important.
- Return `k`.

The judge will validate the solution by ensuring:

1. `k` is equal to the expected count of elements that are not `val`.
2. The first `k` elements of `nums` match the expected values.

### Example 1:

**Input:**  
`nums = [3,2,2,3]`, `val = 3`  
**Output:** `2, nums = [2,2,_,_]`

**Explanation:** The function returns `k = 2`, with the first two elements being `2`. The underscores represent values that do not matter.

### Example 2:

**Input:**  
`nums = [0,1,2,2,3,0,4,2]`, `val = 2`  
**Output:** `5, nums = [0,1,4,0,3,_,_,_]`

**Explanation:** The function returns `k = 5`, with the first five elements containing `0, 1, 4, 0, 3` in any order.

---

## Solution Approach

### Strategy

The key idea is to remove occurrences of `val` by replacing them with valid elements from the end of the array. The solution employs:

1. **Iterating Through the Array**:
   - Iterate through the array and check each element.
   - If an element is equal to `val`, find the last valid element in the array and swap them.
   
2. **Handling Duplicates at the End**:
   - While iterating, if the last element in the array is `val`, remove it.
   - This ensures we do not unnecessarily swap `val` values.

3. **Swapping Elements**:
   - The function `swapCurrentPositionWithLast()` ensures that elements equal to `val` get moved to the end.
   - The helper function `swapElement()` handles the in-place swapping process.

### Code Implementation

```javascript
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
  });
};

var swapElement = function(valPosFrom, valPosTo, arr) {
    [arr[valPosFrom], arr[valPosTo]] = [arr[valPosTo], arr[valPosFrom]];
};

var swapCurrentPositionWithLast = function(valPosFrom, arr) {
    arr[valPosFrom] = null;
    swapElement(valPosFrom, arr.length - 1, arr);
    arr.pop();
};
```

---

## Complexity Analysis

- **Time Complexity**: O(n), where `n` is the number of elements in `nums`, as we traverse the array at most once.
- **Space Complexity**: O(1), since modifications are made in-place without extra storage.

---

## Possible Improvements

1. **Optimize Iteration**:
   - Instead of using `.map()`, a simple `for` loop can be used to iterate through the array, improving clarity and efficiency.
   - The `map()` function is unnecessary since it does not return anything.

2. **Avoid Multiple `.pop()` Calls**:
   - Checking and popping elements within the loop may introduce redundant operations.
   - Instead, a two-pointer approach could be used to replace elements efficiently without frequent array modifications.

3. **Alternative Approach - Two-Pointer Method**:
   - Maintain a `writeIndex` pointer that only updates when encountering a valid element.
   - Swap valid elements forward without unnecessary operations at the end.
   - This would further improve performance and readability.

This approach ensures an in-place modification while maintaining efficiency and correctness.

