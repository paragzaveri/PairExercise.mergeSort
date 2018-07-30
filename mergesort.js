function split(arr) {

  if (arr.length === 1) {
    return arr;
  }

  let halfLength;
  let firstHalf;
  let secondHalf;

  halfLength = Math.floor(arr.length / 2);
  firstHalf = arr.slice(0, halfLength);
  secondHalf = arr.slice(halfLength, arr.length);

  return split(FirstHalf, SecondHalf);

}
