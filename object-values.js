var department = { id: 4, name: 'Finance' };
console.log(Object.values(department));//[4, "Finance"]
var employee = { id: 1000, name: 'Shawn Paul', gender: 'male', department: department };
console.log(Object.values(employee));//[1000, "Shawn Paul", "male", {id: 4, name: "Finance"}]