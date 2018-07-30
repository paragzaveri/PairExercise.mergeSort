describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });
  it('handles a numerical array', function(){
    expect( mergeSort([3,8,6,4,9,1]) ).toEqual( [1,3,4,6,8,9] );
  })
});
