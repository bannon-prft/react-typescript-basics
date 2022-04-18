// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number
age = 12

let userName: string
userName = 'Bannon'

let isInstructor: boolean
isInstructor = false

// More complex types
let hobbies: string[]
hobbies = ['Sports', 'Coding']

let person: {
  name: string
  age: number
}
person = {
  name: 'Bannon',
  age: 31,
}
// person = {
//   isEmployee: true   // will not work because not defined
// }

let people: {
  name: string
  age: number
}[]

// Type Inference
// let course = 'React - The Complete Guide'
// course = 123423 // will not work because 'string' inferred type

// Union Types - type definition that allows more than one type
let course: string | number = 'React - The Complete Guide'
course = 12341

// Type Alias
type Person = {
  name: string
  age: number
}

let person2: Person
person2 = {
  name: 'Bannon',
  age: 31
}

// Functions & Types
function add(a: number, b: number) {
  return a + b // inferred return type
}

function add2(a: number, b: number): number {
  return a + b // set return type
}

function myPrint(value: any) {
  console.log(value) // inferred return 'void'
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array]
  return newArray
}

const demoArray = [1,2,3]
const updatedArray = insertAtBeginning(demoArray, -1)
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')
