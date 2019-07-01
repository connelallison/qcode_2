const rotateArray = function (array, rotation) {
  const rotations = rotation % array.length;
  const rotatedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i + rotations < array.length) {
      rotatedArray[i] = array[i + rotations];
    } else {
      rotatedArray[i] = array[i + rotations - array.length];
    }
  }
  return rotatedArray;
}

const array1 = [1, 2, 3, 4, 5, 6];
console.log(rotateArray(array1, 3));
console.log(rotateArray(array1, 7));
console.log(rotateArray(array1, -2));
console.log(rotateArray(array1, 6));
console.log(rotateArray(array1, 6000));
