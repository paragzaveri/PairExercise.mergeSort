function split(array) {

  if (array.length === 1) {
    return array;
  }

  let firstHalf = array.slice(0, Math.floor(array.length/2));
  let secondHalf = array.slice(Math.floor(array.length/2), array.length);

  // return [firstHalf, secondHalf];


  return [split(firstHalf), split(secondHalf)] ;

}

// function merge(array1, array2){
//   let mergedArray = [];
//   for (let i = 0; i < array1.length; i++){
//     mergedArray.push(array1[i]);
//   }
//   for (let i = 0; i < array2.length; i++){
//     mergedArray.push(array2[i]);
//   }

//   return mergedArray;
// }

function merge(a1, a2) {
  let a3 = [];
  if (a1 < a2) {
    a3.push(a1[0]);
    a3.push(a2[0]);
  }
  else {
    a3.push(a2[0]);
    a3.push(a1[0]);
  }
  return a3;
}

function mergeSort() {


}


// split(arr.slice(0, Math.floor(arr.length/2)));
// split(arr.slice(Math.floor(arr.length/2), arr.length));
