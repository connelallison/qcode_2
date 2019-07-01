const rotateArray = function (array, rotation) {
  const rotation = rotation % array.length;
  const rotatedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i + rotation < array.length) {
      rotatedArray[i] = array[i + rotation];
    } else {
      rotatedArray[i] = array[i + rotation - array.length];
    }
  }
  return rotatedArray;
}
