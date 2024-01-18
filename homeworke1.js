//1. Given an object. Invert it (keys become values and values become keys). If there is
//more than key for that given value create an array.

function func(obj){
    const result = {};
    for (let key in obj) {
      if (result.hasOwnProperty(obj[key])) {
        if (Array.isArray(result[obj[key]])) {
          result[obj[key]].push(key);
        } else {
          result[obj[key]] = [result[obj[key]], key];
        }
      } else {
        result[obj[key]] = key;
      }
    }
    return result;
}

//2. Given two objects. Write a function that performs shallow compare.

function shallowCompare(a, b) {
    const keys1 = Object.keys(a);
    const keys2 = Object.keys(b);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (a[key] !== b[key]) {
        return false;
      }
    }
  
    return true;
  }

  //3. Check whether string is palindrome, or not.
  function palindr(str){
    for(let i = 0; i < str.length / 2; i++){
        if(str[i] !== str[str.length - i - 1]){
            return 'is not Palindrome'  
    }
    return 'is Palindrome'  
}
}
console.log(palindr('asddsa'))


//   4. Given an array of integers. All numbers are unique. Find the count of missing numbers
// between minimum and maximum elements to make integers sequence.

  function uniqueNumbers(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    let uniqueCount = 0;

    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) {
            uniqueCount++;
        }
    }

    return uniqueCount;
}

//5. Given an array and element. Check if that element exists in array.

function elementExist(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}
  

