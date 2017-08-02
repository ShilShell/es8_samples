var department = { id: 4, name: 'Finance' };
console.log(Object.getOwnPropertyDescriptors(department, 'id'));
//{
//    id: { value: 4, writable: true, enumerable: true, configurable: true }, 
//    name: { value: 'Finance', writable: true, enumerable: true, configurable: true }
//};