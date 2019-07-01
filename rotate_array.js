const rotateArray = function (array, rotation) {
  let rotations = rotation % array.length;
  if (rotations < 0) {
    rotations = array.length + rotations;
  }
  const rotatedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i + rotations < array.length) {
      rotatedArray[i + rotations ] = array[i];
    } else {
      rotatedArray[i + rotations - array.length] = array[i];
    }
  }
  return rotatedArray;
}

// const array1 = [1, 2, 3, 4, 5, 6];
// console.log(rotateArray(array1, 3));
// console.log(rotateArray(array1, 7));
// console.log(rotateArray(array1, -2));
// console.log(rotateArray(array1, 6));
// console.log(rotateArray(array1, 6000));
// console.log(rotateArray(array1, -555));

// This function is O(n) for run time and O(n) for memory.
