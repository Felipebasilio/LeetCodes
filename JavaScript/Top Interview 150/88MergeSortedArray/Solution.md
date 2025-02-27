# Merge Sorted Array - Documentation

## Problem Statement

You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2`, respectively.

Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

### Example 1:

**Input:**  
`nums1 = [1,2,3,0,0,0]`, `m = 3`  
`nums2 = [2,5,6]`, `n = 3`  
**Output:** `[1,2,2,3,5,6]`

**Explanation:** The arrays being merged are `[1,2,3]` and `[2,5,6]`. The result after merging is `[1,2,2,3,5,6]`.

### Example 2:

**Input:**  
`nums1 = [1]`, `m = 1`  
`nums2 = []`, `n = 0`  
**Output:** `[1]`

**Explanation:** Since `nums2` is empty, `nums1` remains unchanged.

### Example 3:

**Input:**  
`nums1 = [0]`, `m = 0`  
`nums2 = [1]`, `n = 1`  
**Output:** `[1]`

**Explanation:** Since `m = 0`, `nums1` has no initial elements, so `nums2` is directly copied into `nums1`.

---

## Solution Approach

### Strategy

The key idea is to merge `nums2` into `nums1` starting from the end of both arrays. This allows us to avoid the need for additional memory while ensuring an efficient in-place merge. The approach involves:

1. **Two Pointers Technique**:
   - One pointer (`index1`) starts from the last initialized element of `nums1` (i.e., `m-1`).
   - Another pointer (`index2`) starts from the last element of `nums2` (i.e., `n-1`).
   - A third pointer (`mergeIndex`) starts from the end of `nums1` (i.e., `m+n-1`).

2. **Comparing Elements from Back to Front**:
   - If `nums1[index1] > nums2[index2]`, place `nums1[index1]` at `nums1[mergeIndex]` and move `index1` left.
   - Otherwise, place `nums2[index2]` at `nums1[mergeIndex]` and move `index2` left.
   - Always decrement `mergeIndex`.

3. **Handling Remaining Elements**:
   - If `nums2` still has elements left after `nums1` is exhausted, copy them to `nums1`.
   - No need to explicitly copy elements from `nums1` since they are already in place.

### Code Implementation

```javascript
var merge = function (nums1, m, nums2, n) {
    let index1 = m - 1;
    let index2 = n - 1;
    let mergeIndex = m + n - 1;

    while (index2 >= 0) {
        if (index1 >= 0 && nums1[index1] > nums2[index2]) {
            nums1[mergeIndex] = nums1[index1];
            index1--;
        } else {
            nums1[mergeIndex] = nums2[index2];
            index2--;
        }
        mergeIndex--;
    }
};
```

---

## Complexity Analysis

- **Time Complexity**: O(m + n) since we traverse both arrays once.
- **Space Complexity**: O(1) as we modify `nums1` in-place without using extra memory.

---

## Possible Improvements

1. **Optimization for Edge Cases**:
   - If `nums2` is empty, return immediately.
   - If `nums1` is initially empty (`m = 0`), directly copy `nums2`.

2. **Alternative Approach Using Merge Sort**:
   - Instead of merging from the back, we could use an extra array and merge using the traditional two-pointer technique from the front. However, this would require additional space.

By following this structured approach, the solution remains efficient and adheres to the in-place constraint, making it optimal for large inputs.

