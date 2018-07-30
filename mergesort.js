function split(array) {

  if (array.length === 1) {
    return array;
  }

}

function merge(array1, array2){

  let mergedArray = [];
  for (let i = 0; i < array1.length; i++){
    mergedArray.push(array1[i]);
  }
  for (let i = 0; i < array2.length; i++){
    mergedArray.push(array2[i]);
  }

  return mergedArray;
}


// split(arr.slice(0, Math.floor(arr.length/2)));
// split(arr.slice(Math.floor(arr.length/2), arr.length));
