// Activity 1: Two Sum
// • Task 1: Solve the "Two Sum" problem on LeetCode.
// • Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// • Log the indices for a few test cases.

function twosum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return `index of numbers that add upto ${target} are ${i} and ${j}`;
      }
    }
  }
  return `No two numbers add upto ${target}`;
}

console.log(twosum([1, 2, 3, 4], 5));

// Activity 2: Reverse Integer
// • Task 2: Solve the "Reverse Integer" problem on LeetCode.
// • Write a function that takes an integer and returns it with its digits reversed.
// • Handle edge cases like negative numbers and numbers ending in zero.
// • Log the reversed integers for a few test cases.

function reverse(n) {
  const isNegative = n < 0;
  let num = Math.abs(n);
  let reversed = 0;

  while (num > 0) {
    const digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  if (reversed > 2 ** 31 - 1) {
    return 0;
  }

  return isNegative ? -reversed : reversed;
}

console.log(reverse(-453432450));

// Activity 3: Palindrome Number
// • Task 3: Solve the "Palindrome Number" problem on LeetCode
// • Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// • Log the result for a few test cases, including edge cases like negative numbers.

function palindrome(str) {
  let isPalindrome = true;
  if (str.length < 2) {
    return isPalindrome;
  }
  let i = 0,
    j = str.length - 1;

  while (i < j) {
    if (str[i] === str[j]) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
    }
    i++;
    j--;
  }

  return isPalindrome;
}

console.log(palindrome("abcba"));
console.log(palindrome("abcbaab"));
console.log(palindrome("Hello"));
console.log(palindrome("racecar"));

// Activity 4: Merge Two Sorted Lists
// • Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// • Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// • Create a few test cases with linked lists and log the merged list.

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // Append the remaining elements
  if (l1 !== null) {
    current.next = l1;
  } else {
    current.next = l2;
  }

  return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to print the linked list
function printLinkedList(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

// Test cases
const l1 = createLinkedList([1, 2, 4]);
const l2 = createLinkedList([1, 3, 4]);

const mergedList = mergeTwoLists(l1, l2);
printLinkedList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

const l3 = createLinkedList([1, 3, 5]);
const l4 = createLinkedList([2, 4, 6]);

const mergedList2 = mergeTwoLists(l3, l4);
printLinkedList(mergedList2); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6

const l5 = createLinkedList([]);
const l6 = createLinkedList([0]);

const mergedList3 = mergeTwoLists(l5, l6);
printLinkedList(mergedList3); // Output: 0

// Activity 5: Valid Parentheses
// • Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// • Write a function that takes a string containing just the characters (, '), 'f, 3, T' and 'I', and determines if the input string is valid.
// • A string is valid if open brackets are closed in the correct order.
// • Log the result for a few test cases.

function isValid(s) {
  const stack = [];
  const matchingParentheses = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0 || stack.pop() !== matchingParentheses[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Test cases
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true
console.log(isValid("")); // Output: true
