describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });
  it('handles a numerical array', function(){
    expect( mergeSort([3,8,6,4,9,1]) ).toEqual( [1,3,4,6,8,9] );
  })
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([3,1,2,4]) ).toEqual( [[[3],[1]], [[2],[4]]]);
    expect( split([3,8,6,4,9,1]) ).toEqual( [ [ [3],[ [8], [6] ] ], [ [4], [ [9], [1]] ] ]);
  });
});


describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([3,8,6], [4,9,1], [3,8,6,4,9,1]).toEqual([1,3,4,6,8,9]) );
  });
});
