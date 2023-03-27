const numArr2 = [1, 5, 4, 2, 3, 8];

function sort<T>(array: T[], callback: (a: T, b: T) => number): T[] {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (callback(array[i], array[j]) > 0) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

const sapxep = sort(numArr2, (a, b) => a - b);

console.log(sapxep); 
