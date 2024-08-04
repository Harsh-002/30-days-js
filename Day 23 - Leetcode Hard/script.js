// Activity 1: Median of Two Sorted Arrays
// • Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// • Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// • Log the median for a few test cases, including edge cases.
function findMedianSortedArrays(nums1, nums2) {
  // Ensure nums1 is the smaller array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  let imin = 0,
    imax = m,
    halfLen = Math.floor((m + n + 1) / 2);

  while (imin <= imax) {
    let i = Math.floor((imin + imax) / 2);
    let j = halfLen - i;

    if (i < m && nums2[j - 1] > nums1[i]) {
      // i is too small, must increase it
      imin = i + 1;
    } else if (i > 0 && nums1[i - 1] > nums2[j]) {
      // i is too big, must decrease it
      imax = i - 1;
    } else {
      // i is perfect
      let maxOfLeft;
      if (i === 0) {
        maxOfLeft = nums2[j - 1];
      } else if (j === 0) {
        maxOfLeft = nums1[i - 1];
      } else {
        maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1]);
      }

      if ((m + n) % 2 === 1) {
        return maxOfLeft;
      }

      let minOfRight;
      if (i === m) {
        minOfRight = nums2[j];
      } else if (j === n) {
        minOfRight = nums1[i];
      } else {
        minOfRight = Math.min(nums1[i], nums2[j]);
      }

      return (maxOfLeft + minOfRight) / 2.0;
    }
  }

  throw new Error("Input arrays are not sorted or have invalid values.");
}

// Test Cases
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0.0
console.log(findMedianSortedArrays([], [1])); // Output: 1.0
console.log(findMedianSortedArrays([2], [])); // Output: 2.0

// Activity 2: Merge k Sorted Lists
// • Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// • Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// • Create a few test cases with linked lists and log the merged list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  if (!lists || lists.length === 0) return null;

  const minHeap = new MinHeap((a, b) => a.val - b.val);

  for (let list of lists) {
    if (list) {
      minHeap.insert(list);
    }
  }

  const dummy = new ListNode();
  let current = dummy;

  while (!minHeap.isEmpty()) {
    let minNode = minHeap.extract();
    current.next = minNode;
    current = current.next;

    if (minNode.next) {
      minHeap.insert(minNode.next);
    }
  }

  return dummy.next;
}

class MinHeap {
  constructor(compare) {
    this.data = [];
    this.compare = compare;
  }

  insert(element) {
    this.data.push(element);
    this._heapifyUp(this.data.length - 1);
  }

  extract() {
    if (this.data.length === 0) return null;
    const root = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = last;
      this._heapifyDown(0);
    }
    return root;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  _heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (
      parentIndex >= 0 &&
      this.compare(this.data[index], this.data[parentIndex]) < 0
    ) {
      [this.data[index], this.data[parentIndex]] = [
        this.data[parentIndex],
        this.data[index],
      ];
      this._heapifyUp(parentIndex);
    }
  }

  _heapifyDown(index) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let smallest = index;

    if (
      leftChildIndex < this.data.length &&
      this.compare(this.data[leftChildIndex], this.data[smallest]) < 0
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < this.data.length &&
      this.compare(this.data[rightChildIndex], this.data[smallest]) < 0
    ) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      [this.data[index], this.data[smallest]] = [
        this.data[smallest],
        this.data[index],
      ];
      this._heapifyDown(smallest);
    }
  }
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  const dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to print a linked list
function printLinkedList(head) {
  let current = head;
  const result = [];
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

// Test Cases
const lists = [
  createLinkedList([1, 4, 5]),
  createLinkedList([1, 3, 4]),
  createLinkedList([2, 6]),
];

const mergedList = mergeKLists(lists);
printLinkedList(mergedList);

// Activity 3: Trapping Rain Water
// • Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// • Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
// • Log the amount of trapped water for a few test cases.
function trap(height) {
  if (height == null || height.length === 0) return 0;

  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let trappedWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        trappedWater += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        trappedWater += rightMax - height[right];
      }
      right--;
    }
  }

  return trappedWater;
}

// Test Cases
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9
console.log(trap([1, 0, 2, 1, 0, 1, 3])); // Output: 5
console.log(trap([4, 2, 3])); // Output: 1
console.log(trap([1, 1, 1, 1, 1])); // Output: 0

// Activity 4: N-Queens
// • Task 4: Solve the "N-Queens" problem on LeetCode.
// • Write a function that places n queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
// • Log the distinct solutions for a few test cases.
function solveNQueens(n) {
  const result = [];
  const board = Array(n).fill(-1);

  function isValid(row, col) {
    for (let i = 0; i < row; i++) {
      const prevCol = board[i];
      if (
        prevCol === col ||
        prevCol - i === col - row ||
        prevCol + i === col + row
      ) {
        return false;
      }
    }
    return true;
  }

  function solve(row) {
    if (row === n) {
      const solution = board.map((col) => {
        return Array(n)
          .fill(".")
          .map((_, i) => (i === col ? "Q" : "."))
          .join("");
      });
      result.push(solution);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row] = col;
        solve(row + 1);
        board[row] = -1;
      }
    }
  }

  solve(0);
  return result;
}

// Example usage:
console.log("Solutions for n = 4:");
const solutions4 = solveNQueens(4);
solutions4.forEach((sol) => {
  console.log(sol.join("\n"));
  console.log();
});

console.log("Solutions for n = 8 (showing first 2):");
const solutions8 = solveNQueens(8);
solutions8.slice(0, 2).forEach((sol) => {
  console.log(sol.join("\n"));
  console.log();
});

// Activity 5: Word Ladder
// • Task 5: Solve the "Word Ladder" problem on LeetCode.
// • Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
// • Log the length of the shortest transformation sequence for a few test cases.
function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue = [[beginWord, 1]]; // [currentWord, currentLength]
  const visited = new Set();
  visited.add(beginWord);

  while (queue.length > 0) {
    const [currentWord, currentLength] = queue.shift();

    if (currentWord === endWord) {
      return currentLength;
    }

    for (let i = 0; i < currentWord.length; i++) {
      const originalChar = currentWord[i];
      for (let charCode = 97; charCode <= 122; charCode++) {
        // 'a' to 'z'
        const newChar = String.fromCharCode(charCode);
        if (newChar === originalChar) continue;

        const newWord =
          currentWord.substring(0, i) + newChar + currentWord.substring(i + 1);

        if (wordSet.has(newWord) && !visited.has(newWord)) {
          visited.add(newWord);
          queue.push([newWord, currentLength + 1]);
        }
      }
    }
  }

  return 0;
}

// Example usage:
console.log("Shortest transformation length from 'hit' to 'cog':");
const length1 = ladderLength("hit", "cog", [
  "hot",
  "dot",
  "dog",
  "cog",
  "lot",
  "log",
]);
console.log(length1); // Should print 5

console.log(
  "Shortest transformation length from 'hit' to 'cog' with missing end word:"
);
const length2 = ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]);
console.log(length2); // Should print 0 as 'cog' is not in the word list
