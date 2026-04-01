// Optional Values in parameter
function generateError(msg?: string) {
    throw new Error(msg ?? 'Something went wrong');
}

generateError("An error occured"); // add ; to avoid ASI issue
// generateError()


(() => {
    // Optional Values in object properties
    type User = {
        name: string;
        age: number;
        role?: 'admin' | 'guess'
    }

    let user: User = {
        name: 'Louise',
        age: 20
    }

    user.name;
    user.age;
})();


// Nullish Coalescing `??` operator 
let input: string | null | undefined = '';

const didProvideInput: string | boolean = input ?? false;


// try it on browser console log to see results
// update it `??` to `||`
// `||` check for falsy not false - falsy = null, undefined, 0, empty string, etc
// ?? check only if null or undefined

// Use || when you want to fall back on any falsy value.
// Use ?? when you only want to fall back on null or undefined.