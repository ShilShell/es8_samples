# Features of ES8/ECMA 2017
In the month of June 2017 the [ECMAScript 2017](https://www.ecma-international.org/ecma-262/8.0/index.html) got approved. Here we are going to discuss about the new features included in ES8 aka ECMA 2017.

## String Padding
The string Padding was a long pending feature which should have been included in JavaScript/EcmaScript long time back. There are two new methods have been included the String

* padStart(targetLength, [paddingString])
* padEnd(targetLength, [paddingString])

Lets jump into the code
```javascript
var str = 'Hi';
console.log(str.padStart(5));           //   Hi
console.log(str.padStart(5, '-'));      //---Hi
console.log(str.padStart(11, ' baby '));// baby baHi
console.log('String greater than 5 character length'.padStart(5, '-'));//String greater than 5 character length

console.log(str.padEnd(5));             //Hi   
console.log(str.padEnd(5, '-'));        //Hi---
console.log(str.padEnd(11, ' baby '));  //Hi baby ba
console.log('String greater than 5 character length'.padEnd(5, '-'));//String greater than 5 character length
```
I hope no more explanation required since above the above snippet code is clear

## Object Values and Entries
As we all know an object literal will have Keys and its Value. Previously in case if we want to retrive keys/values seperately we had to loop through but with the inclusion of two methods

* Object.values(object)
* Object.entries(object)

### Object Values
 The *Object.values* method returns an array of a given object's values in array form. Here is the example

```javascript
var department = { id: 4, name: 'Finance' };
console.log(Object.values(department));//[4, "Finance"]

var employee = { id: 1000, name: 'Shawn Paul', gender: 'male', department: department };

console.log(Object.values(employee));//[1000, "Shawn Paul", "male", {id: 4, name: "Finance"}]
```

### Object Entries
 The *Object.entries* method returns an array of a given object's key and values in array form. Here is the example
```javascript
var department = { id: 4, name: 'Finance' };
console.log(Object.entries(department));//[[ "id", 4 ], ["name", "Finance"]]
var employee = { id: 1000, name: 'Shawn Paul', gender: 'male', department: department };
console.log(Object.entries(employee));//[["id", 1000], ["name", "Shawn Paul"], ["gender", "male"], ["department",[[ "id", 4 ], ["name", "Finance"]]]
```

## Trailing Comma

The trailing comma is the new feature of ES8 by which you can have the leisure to include extra/trailing comma at the method's parameter.

```javascript
function getEmployeeObject(id, name, age, ) {
    return { id: id, name: name, age, age };
}

console.log(getEmployeeObject(202, 'Shawn Paul', 24));
```
In the above example getEmployeeObject() method there are 3 parameters id, name and age. If you notice the after third parameter (age) there is a extra/trailing comma placed but it still manages to excute the code without issues only if it is exectued in ES8 or higher compatible browsers else it would throw an error.

**It is always better to avoid extra/trailing space from the method**

## Object.getOwnPropertyDescriptors
## Typed Arrays

Typed Arrays are Arrays which accepts only a specific datatype. There are Integer, Unsigned Integer and Float type arrays of various size. The below are the various newly introduced arrays of ES8. 

* Int8Array
* Uint8Array
* Uint8ClampedArray
* Int16Array
* Uint16Array
* Int32Array
* Uint32Array
* Float32Array
* Float64Array

Here if you notice there are Unsigned Int and Float types it means there is no negative signed numbers and it accepts only 0 to max value of the data type. Say for example Uint8Array's type is Unsigned Int of 8 bits which starts at 0 and ends at 255. I am not going to explain all the Typed Array

### Int8Array
Int8Array is Integer of 8 bits array. Let see in action
```javascript
var array = new Int8Array([10, 20, 30, 40, 50]);
console.log(array.length);//5

//Let us set max(127) value of Int8
array[0] = 127;
console.log(array[0]);//127

//Lets increment
array[0]++;
console.log(array[0]);//-128
//The Int8 min(-128) and max(127)
```

### Uint8Array vs Uint8ClampedArray

**Uint8Array**

```javascript
var array = new Uint8Array([255, 256, 0, -1]);
console.log(array[0]);//255
console.log(array[1]);//0
console.log(array[2]);//0
console.log(array[3]);//255

//The Unsigned Int8 min(0) and max(255)
```

**Uint8ClampedArray**

```javascript
var array = new Uint8ClampedArray([255, 256, 0, -1]);
console.log(array[0]);//255
console.log(array[1]);//255
console.log(array[2]);//0
console.log(array[3]);//0

//The Unsigned Int8 min(0) and max(255)
```