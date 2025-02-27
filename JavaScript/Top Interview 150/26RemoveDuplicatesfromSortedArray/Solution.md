# Remove Duplicates from Sorted Array - Documentation

## Problem Statement

Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in `nums`.

Consider the number of unique elements in `nums` to be `k`. The function should:

- Modify `nums` such that the first `k` elements contain only unique elements, maintaining their original order.
- The remaining elements in `nums` beyond `k` are not important.
- Return `k`.

### Example 1:

**Input:**  
`nums = [1,1,2]`

**Output:** `2, nums = [1,2,_]`

**Explanation:** The function returns `k = 2`, with the first two elements being `1` and `2` respectively. The underscores represent ignored elements beyond `k`.

### Example 2:

**Input:**  
`nums = [0,0,1,1,1,2,2,3,3,4]`

**Output:** `5, nums = [0,1,2,3,4,_,_,_,_,_]`

**Explanation:** The function returns `k = 5`, with the first five elements containing `0, 1, 2, 3, 4`.

---

## Solution Approach

### Strategy

The approach follows the **two-pointer technique**:

1. **Initialize a pointer (`k`) to track unique elements:**
   - Start with `k = 1` since the first element is always unique.

2. **Iterate through the array:**
   - Compare each element with the previous one.
   - If a new unique element is found, place it at `nums[k]` and increment `k`.

3. **Return `k` as the number of unique elements.**

### Code Implementation

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let k = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    
    return k;
};
```

---

## Complexity Analysis

- **Time Complexity**: O(n), where `n` is the number of elements in `nums`, since we traverse the array once.
- **Space Complexity**: O(1), since all modifications are done in-place without extra memory.

---

## Possible Improvements

1. **Edge Case Handling**:
   - If `nums` is empty, return `0` immediately.
   - Since the array is sorted, duplicates always appear consecutively, making it efficient to track unique values.

2. **Alternative Approach - Using Set (Not In-Place)**:
   - Convert `nums` into a `Set` to remove duplicates and store unique values back into `nums`.
   - However, this would require extra space, violating the in-place constraint.

This two-pointer approach is optimal in both time and space efficiency for removing duplicates from a sorted array while maintaining the original order.

