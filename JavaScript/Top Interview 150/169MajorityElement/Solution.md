# Majority Element - Documentation

## Problem Statement

Given an array `nums` of size `n`, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

### Example 1:

**Input:**  
`nums = [3,2,3]`

**Output:** `3`

### Example 2:

**Input:**  
`nums = [2,2,1,1,1,2,2]`

**Output:** `2`

---

## Solution Approach

### Strategy

The problem requires identifying the majority element that appears more than `n / 2` times. A few common approaches can be used:

1. **Hash Map Counting Approach (Current Implementation)**:
   - Create a frequency map to store the count of each element.
   - Traverse the map to find the element with the highest count.

2. **Boyer-Moore Voting Algorithm (Optimal Solution)**:
   - Uses a counter-based approach that runs in O(n) time with O(1) space.
   - If an element is the majority, it will be the last remaining element after processing the array.

3. **Sorting Approach**:
   - Sort the array and return the middle element (O(n log n) time complexity).

### Code Implementation

```javascript
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
            majoElem.elem = key;
            majoElem.qtde = qtde;
        }
        return key;
    }

    const result2 = Object.groupBy(Object.entries(keyValueObj), setMajo);
    return parseInt(majoElem.elem);
};
```

---

## Complexity Analysis

- **Time Complexity**: O(n), since the array is traversed twice (once for counting and once for finding the maximum count).
- **Space Complexity**: O(n), due to the storage of frequency counts in an object.

---

## Possible Improvements

1. **Using Boyer-Moore Voting Algorithm (O(n) time, O(1) space)**:
   - Instead of using extra space for frequency counting, maintain a candidate and a counter while iterating through the array.
   - If the counter becomes zero, assign a new candidate.
   - This method ensures an optimal solution in terms of both time and space.

2. **Optimizing Current Implementation**:
   - Instead of `Object.groupBy`, which may not be widely supported, iterate through the frequency object directly.
   - Avoid unnecessary parsing of numeric values where possible.

By implementing the Boyer-Moore algorithm, the solution can be made more efficient while keeping space usage minimal.

