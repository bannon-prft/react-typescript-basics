# React - TypeScript Basics

This project is a practice project from [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

## Key Concepts

Adding type safety to React apps

TypeScript is a "superset" of JavaScript
- adds static typing to JS
- JS on its own is dynamically typed

```npx tsc <filename.ts>``` to compile ts files into js

```ts
// primitives
let variable: type = value

// arrays
let variable: type[] = [arrayOfValuesOfType]

// objects
let variable: {
  key1: type1
  key2: type2
}

// array of objects
let variable: {
  key1: type1
  key2: type2
}[]

// Union Types
let variable: type1 | type2 = <valueofType1>
variable = <valueofType2>

// Type Alias
type AliasName = {
  property1: type1
  property2: type2
}
let variable: AliasName
variable = {
  property1: <valueofType1>,
  property2: <valueofType2>
}

// Function & Types
function doSomething(a: type1, b: type2) {
  return a + b
} // will return an inferred type

// or can explicitly set it
function doSomething(a: type1, b: type2): number {
  return a + b
}

// if not returning anything
function myPrint(value: any) {
  console.log(value)
} // will return inferred type 'void'

// Generics - Write type-safe functions which are flexible
function myFunc<T>(array: T[], value: T) {
  const newArray = [value, ...array]
  return newArray
} // the 'T' will be set once the function is used for the first time
```

TS tries to infer as many types as possible without explicitly stating those types

