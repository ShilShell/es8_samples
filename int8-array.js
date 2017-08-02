var array = new Int8Array([10, 20, 30, 40, 50]);
console.log(array.length);//5

//Let us set max(127) value of Int8
array[0] = 127;
console.log(array[0]);//127

//Lets increment
array[0]++;
console.log(array[0]);//-128
//The Int8 min(-128) and max(127)