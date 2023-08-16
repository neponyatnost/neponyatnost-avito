const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]

function binarySearch(array, item) {
  let start = 0
  let end = array.length
  let middle
  while (start <= end) {
    middle = Math.floor((start + end) / 2)

    if (array[middle] === item) return middle
    if (item < array[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }
  return null
}

// console.log(binarySearch(array, 7))

const array1 = [2, 4, 6, 9, 2, 4, 1, 9, 4, -2, -90, -6, 98, 34, 78, 12]

function selectedSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    let temporaryItem = array[i]
    array[i] = array[minIndex]
    array[minIndex] = temporaryItem
  }
  return array
}

// console.log(selectedSort(array1))

function isPalindrome(string) {
  const regExp = /[^A-Za-z0-9А-Яа-я]/gi
  string = string.toLowerCase().replace(regExp, '')

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false
    }
  }
  return true
}

// console.log(isPalindrome('а роза упала на лапу азора'))

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

// console.log(bubbleSort(array1))

function factorial(n) {
  if (n === 1) return 1

  return factorial(n - 1) * n
}

// console.log(factorial(10))

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1
  }

  return fibonacci(n - 2) + fibonacci(n - 1)
}

// console.log(fibonacci(9))

const array2 = [
  2, 4, 6, 9, 2, 4, 1, 9, 4, -2, -90, -6, 98, 34, 78, 12, 2, 4, 6, 9, 2, 4, 1,
  9, 4, -2, -90, -6, 98, 34, 78, 12, -100, -99, -1010101, 675, 234543,
]

function quickSort(array) {
  if (array.length <= 1) {
    return array
  }

  let middleIndex = Math.floor(array.length / 2)
  let middleItem = array[middleIndex]
  let less = []
  let greater = []

  for (let i = 0; i < array.length; i++) {
    if (i === middleIndex) {
      continue
    }
    if (array[i] < middleItem) {
      less.push(array[i])
    } else {
      greater.push(array[i])
    }
  }

  return [...quickSort(less), middleItem, ...quickSort(greater)]
}

// console.log(quickSort(array2))

const array3 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]

function recursiveBinarySearch(array, item, start, end) {
  let middle = Math.floor((start + end) / 2)

  if (item === array[middle]) {
    return middle
  }

  if (item < array[middle]) {
    return recursiveBinarySearch(array, item, start, middle - 1)
  } else {
    return recursiveBinarySearch(array, item, middle + 1, end)
  }
}

// console.log(recursiveBinarySearch(array3, 4, 0, array3.length))

const graph = {
  a: ['b', 'c'],
  b: ['f'],
  c: ['d', 'e'],
  d: ['f'],
  e: ['f'],
  f: ['g'],
}

function breathSearch(graph, start, end) {
  let queue = [start]
  let route = []

  while (queue.length > 0) {
    const current = queue.shift()
    if (!graph[current]) {
      graph[current] = []
    }
    route.push(graph[current])
    if (graph[current].includes(end)) {
      // return route
      return true
    } else {
      queue = [...queue, ...graph[current]]
      // queue.push(queue, graph[current])
    }
  }
  return false
}

// console.log(breathSearch(graph, 'a', 'g'))
