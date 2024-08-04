// Activity 1: Add Two Numbers
// • Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// • Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
// • Create a few test cases with linked lists and log the sum as a linked list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  return dummyHead.next;
}

// Helper function to create linked list from array
function createLinkedList(arr) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;

  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return dummyHead.next;
}

// Helper function to print linked list
function printLinkedList(node) {
  let current = node;
  let result = [];
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

// Test cases
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let sumList = addTwoNumbers(l1, l2);
printLinkedList(sumList); // Output: 7 -> 0 -> 8

l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
sumList = addTwoNumbers(l1, l2);
printLinkedList(sumList); // Output: 0

l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);
sumList = addTwoNumbers(l1, l2);
printLinkedList(sumList); // Output: 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1

// Activity 2: Longest Substring Without Repeating Characters
// • Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// • Write a function that takes a string and returns the length of the longest substring without repeating characters.
// • Log the length for a few test cases, including edge cases.
function lengthOfLongestSubstring(s) {
  let charSet = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("dvdf"));

// Activity 3: Container With Most Water
// • Task 3: Solve the "Container With Most Water" problem on LeetCode.
// • Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
// • Log the maximum amount of water for a few test cases.

function maxArea(heights) {
  let maxArea = 0;
  let left = 0,
    right = heights.length - 1;

  while (left < right) {
    let height = Math.min(heights[left], heights[right]);
    let width = right - left;
    let currentArea = height * width;
    maxArea = Math.max(maxArea, currentArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 2, 1]));

// Activity 4: 3Sum
// • Task 4: Solve the "3Sum" problem on LeetCode.
// • Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
// • Log the triplets for a few test cases, including edge cases.

function threeSum(nums) {
  // Sort the array to use the two-pointer technique
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Avoid duplicate triplets
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = 0,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Avoid duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Expected output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([])); // Expected output: []
console.log(threeSum([0])); // Expected output: []
console.log(threeSum([0, 0, 0])); // Expected output: [[0, 0, 0]]
console.log(threeSum([1, 2, -2, -1])); // Expected output: []

// Activity 5: Group Anagrams
// • Task 5: Solve the "Group Anagrams" problem on LeetCode.
// • Write a function that takes an array of strings and groups anagrams together.
// • Log the grouped anagrams for a few test cases.
function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    // Sort the string to use as a key
    const sortedStr = str.split("").sort().join("");

    // If the sorted string is not a key in the map, add it with an empty array
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }

    // Push the original string to the corresponding group
    map.get(sortedStr).push(str);
  }

  // Convert the map values to an array of groups
  return Array.from(map.values());
}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Expected output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

console.log(groupAnagrams([""]));
// Expected output: [[""]]

console.log(groupAnagrams(["a"]));
// Expected output: [["a"]]

console.log(groupAnagrams(["ab", "ba", "abc", "bca", "cab", "bac"]));
// Expected output: [["ab", "ba"], ["abc", "bca", "cab", "bac"]]

console.log(groupAnagrams(["", "", ""]));
// Expected output: [["", "", ""]]
