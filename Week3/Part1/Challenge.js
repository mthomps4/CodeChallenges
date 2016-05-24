  var array = [1,2,3,4,5];
  var x = array.length;
  var sum = 0;


function printArray(){
  for(var i=0; i<x; i++)
    {
      sum += array[i];
    }
  console.log(sum);
}
printArray();

//Part two add the number 6 after 2
array.splice(2,0,6);
console.log(array);
