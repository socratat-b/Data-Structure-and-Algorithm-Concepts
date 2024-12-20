const unsortedArray = [
  64, 34, 25, 12, 22, 11, 90, 88, 45, 73, 51, 38, 15, 99, 67, 28, 82, 41, 19,
  33,
];

// Insertion Sort
// Best case O(n) -> Average & Worst case O(n^2)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentItem = arr[i];
    let prevIndex = i - 1;

    while (prevIndex >= 0 && arr[prevIndex] > currentItem) {
      arr[prevIndex + 1] = arr[prevIndex];
      prevIndex--;
    }

    arr[prevIndex + 1] = currentItem;
  }

  return arr;
}
// console.log(insertionSort(unsortedArray));

// Quick Sort
// Remember the divide and concquer concept
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;

  let pivotIndex = partition(arr, start, end);

  //Recursion -> divide  part left and right
  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);

  return arr;
}

function partition(arr, start, end) {
  // Choosing pivot to be the last element
  let pivot = arr[end];
  let pointer = start - 1;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      pointer++;
      [arr[pointer], arr[i]] = [arr[i], arr[pointer]];
    }
  }
  pointer++;
  [arr[pointer], arr[end]] = [arr[end], arr[pointer]];

  return pointer;
}

// console.log(quickSort(unsortedArray));

// Merge Sort
//Anothere divide and conquer concept
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);

  //   Divide part
  let leftArr = arr.slice(0, middle);
  let rightArr = arr.slice(middle);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let result = [];
  let pointerOne = 0;
  let pointerTwo = 0;

  while (pointerOne < leftArr.length && pointerTwo < rightArr.length) {
    if (leftArr[pointerOne] <= rightArr[pointerTwo]) {
      result.push(leftArr[pointerOne]);
      pointerOne++;
    } else {
      result.push(rightArr[pointerTwo]);
      pointerTwo++;
    }
  }

  while (pointerOne < leftArr.length) {
    result.push(leftArr[pointerOne]);
    pointerOne++;
  }

  while (pointerTwo < rightArr.length) {
    result.push(rightArr[pointerTwo]);
    pointerTwo++;
  }

  return result;
}

// console.log(mergeSort(unsortedArray));

// Two pointers

// Sliding window
