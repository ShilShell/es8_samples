var array = new Uint8ClampedArray([255, 256, 257, 0, -1, -2]);
console.log(array[0]);//255
console.log(array[1]);//255
console.log(array[2]);//255
console.log(array[3]);//0
console.log(array[4]);//0
console.log(array[5]);//0

//The Unsigned Int8 min(0) and max(255)