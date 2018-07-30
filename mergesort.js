function mergeSort(array) {

  if (array.length){
    split(array);
  }
  return array;

}

function split(array){
  if (array.length === 1) {
    return;
  }
  let leftArray = array.slice(0, Math.floor(array.length/2));
  let rightArray = array.slice(Math.floor(array.length/2));

  split(leftArray);
  split(rightArray);

  merge(leftArray, rightArray, array);

  return array;
}

function merge(leftArray, rightArray, array) {
  let index = 0;

  while(leftArray.length && rightArray.length){
    if (rightArray[0] < leftArray[0]) {
      array[index] = rightArray.shift();
    } else {
      array[index] = leftArray.shift();
    }
    index++;
  }

  while (leftArray.length) {
    array[index] = leftArray.shift();
    index++;
  }

  while (rightArray.length) {
    array[index] = rightArray.shift();
    index++;
  }

  return array;

}

