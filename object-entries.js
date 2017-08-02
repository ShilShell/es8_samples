var department = { id: 4, name: 'Finance' };
console.log(Object.entries(department));//[[ "id", 4 ], ["name", "Finance"]]
var employee = { id: 1000, name: 'Shawn Paul', gender: 'male', department: department };
console.log(Object.entries(employee));//[["id", 1000], ["name", "Shawn Paul"], ["gender", "male"], ["department",[[ "id", 4 ], ["name", "Finance"]]]