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
This file shows an alternative way to use enums by using union types (e.g., `'admin' | 'user' | 'guest'`). Instead of relying on enums, it uses string literal types to restrict values. This approach is often simpler, more flexible, and works well with modern TypeScript patterns.

## 07-custom-type-role.ts
This file demonstrates how to create custom types using the `type` keyword. It defines reusable type structures (like a user role) and shows how they can be applied to variables or objects. This helps make code more readable and maintainable.

## 08-functions.ts
This file explains how to type functions in TypeScript. It includes examples of typed parameters, return types, and function behavior. It shows how TypeScript ensures functions receive the correct inputs and return expected outputs, preventing common runtime errors.

## 09-special-types.ts
This file introduces special TypeScript types such as `any`, `unknown`, `never`, and `void`. It explains when to use each type and the differences between them. It also highlights how `unknown` is safer than `any`, and how `never` is used for functions that never return.

## 10-form.html and 10-type-narrowing.ts
These files demonstrate type narrowing in a real DOM scenario. The HTML file contains a simple form, while the TypeScript file shows how to safely access DOM elements using techniques like `instanceof`, type assertions, and null checks. It highlights how TypeScript prevents errors when working with elements that may be `null` or of unknown type.

## 11-optional.ts
This file explores optional values in TypeScript. It includes optional function parameters, optional object properties, and the use of the nullish coalescing operator (`??`). It explains how to safely handle missing or undefined values and compares `??` with the logical OR (`||`) operator.