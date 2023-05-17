## 冒泡排序
原理：比较两个相邻的元素，将值大的元素放到后面 思路：依次比较相邻的两个数，小的放前面，大的放后面。

<img src="https://limy-1309594960.cos.ap-beijing.myqcloud.com/202209261914597.gif" data-fancybox="gallery"/>

```typescript
function bubbleSort(arr) {
  // 外层，需要遍历的次数
  for (let i = 1; i < arr.length; i++) {
    // 内层，每次比较
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
}
```
## 插入排序
原理：为当前元素保存一个副本，依次向前遍历前面的元素是否比自己大，如果比自己大就直接把前一个元素赋值到当前元素的位置，当前某位置的元素不再比当前元素大的时候，将当前元素的值赋值到这个位置。
<img src="https://limy-1309594960.cos.ap-beijing.myqcloud.com/202209261915251.gif" data-fancybox="gallery"/>

```typescript
Array.prototype.insertionSort = function () {
  const arr = this;
  let pre, curVal;
  for (let i = 1; i < arr.length; i++) {
    pre = i - 1;
    curVal = arr[i];
    while (pre >= 0 && arr[pre] > curVal) {
      arr[pre + 1] = arr[pre];
      pre--;
    }
    arr[pre + 1] = curVal;
  }
  console.log(arr);
};
```
```typescript
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j,
      temp = arr[i];
    for (j = i; j > 0 && arr[j - 1] > temp; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = temp;
  }
}
```
## 快速排序
原理：找一个基准值将数组分割成两部分，大的放后面，小的放前面 <br>
思路：  <br>
1．先从数列中取出一个数作为基准数。<br>
2．分区过程，将比这个数大的数全放到它的右边，小于或等于它的数全放到它的左边。<br>
3．再对左右区间重复第二步，直到各区间只有一个数。<br>
```typescript
function swap(nums, p, q) {
  const temp = nums[p]
  nums[p] = nums[q]
  nums[q] = temp
}
function randomQuickSort(arr,l,r) {
  if (l >= r) return
  let random = Math.floor(Math.random() * (r - l + 1)) + l
  swap(arr, random, l)
  let left = l,
    right = r,
    pivot = arr[left]
  while (left < right) {
    while (left < right && arr[right] >= pivot) right--
    if (left < right && arr[right] < pivot) arr[left] = arr[right]
    while (left < right && arr[left] <= pivot) left++
    if (left < right && arr[left] > pivot) arr[right] = arr[left]
    if (left >= right) arr[left] = pivot
  }
  randomQuickSort(arr, l, right - 1)
  randomQuickSort(arr, right + 1, r)
  return arr
}
```
## 堆排序
<img src="https://limy-1309594960.cos.ap-beijing.myqcloud.com/202209261913319.gif" data-fancybox="gallery"/>

```typescript
Array.prototype.heapSort = function () {
  const arr = this;
  let len = arr.length;

  function swap(a, b) {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }

  function heap(i) {
    let maxIndex = i;
    let lIndex = i * 2 + 1;
    let rIndex = i * 2 + 2;
    if (lIndex < len && arr[lIndex] < arr[maxIndex]) {
      maxIndex = lIndex;
    }
    if (rIndex < len && arr[rIndex] < arr[maxIndex]) {
      maxIndex = rIndex;
    }

    if (i !== maxIndex) {
      swap(i, maxIndex);
      heap(maxIndex);
    }
  }

  function buildHeap() {
    for (let i = len >> 1; i >= 0; i--) {
      heap(i);
    }
  }
  buildHeap();
  console.log(arr);

  for (let i = len - 1; i > 0; i--) {
    swap(0, i);
    len--;
    heap(0);
  }
  console.log(arr);
};

```

## 归并合并
<img src="https://limy-1309594960.cos.ap-beijing.myqcloud.com/202209261915136.gif" data-fancybox="gallery"/>

```typescript
Array.prototype.mergeSort = function () {
  const arr = this;
  function split(arr) {
    if (arr.length < 2) {
      return arr;
    }
    const mid = arr.length >> 1;
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(split(leftArr), split(rightArr));
  }

  /**
   * @description:
   * @param {Array<number>} lArr
   * @param {Array<number>} rArr
   * @return {*}
   */
  function merge(lArr, rArr) {
    const res = [];
    while (lArr.length && rArr.length) {
      res.push(lArr[0] >= rArr[0] ? rArr.shift() : lArr.shift());
    }

    while (lArr.length) {
      res.push(lArr.shift());
    }

    while (rArr.length) {
      res.push(rArr.shift());
    }
    return res;
  }
  console.log(split(arr));
};
```

## 选择排序
<img src="https://limy-1309594960.cos.ap-beijing.myqcloud.com/202209261914614.gif" data-fancybox="gallery"/>

```typescript
Array.prototype.selectionSort = function () {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min === i) continue;
    const tmp = arr[i];
    arr[i] = arr[min];
    arr[min] = tmp;
  }
  console.log(arr);
};
```

