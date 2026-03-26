# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
This file introduces the basic features of TypeScript such as type inference and explicit typing. It shows how variables are assigned types and what happens when incorrect types are used. It helps beginners understand how TypeScript enforces type safety.

## 02-vanilla-js-types.js
This file demonstrates how JavaScript checks types using the `typeof` operator. It compares how JavaScript handles types at runtime, which helps highlight the difference between JavaScript and TypeScript.

## 03-flexible-types.ts
This file explores the `any` type, which allows variables to store any kind of value. It shows how flexibility can be useful but also risky because it removes type safety.

## 04-arrays-objects.ts
This file explains how to work with arrays and objects in TypeScript. It includes examples of typed arrays, union types, and structured objects with defined properties, making data more organized and predictable.

## 05-enum.ts
This file introduces enums and how they are used to define a set of named constants. It shows how enums make code more readable and prevent invalid values from being assigned. 
## 06-alternative-to-enum.ts
## 07-custom-type-role.ts
## 08-functions.ts
## 09-special-types.ts
## 10-form.html and 10-type-narrowing.ts
## 11-optional.ts