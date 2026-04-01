(() => {

    
    function add(a: number, b: number): number {
        return a + b
    }

    console.log(add(5, 10))

    function log(message: string): void {
        console.log(message)
    }

    log("Hello, World!")

  
    function logAndThrow(errorMessage: string): never {
        console.log(errorMessage)
        throw new Error(errorMessage)
    }

    function performJob(cb: (m: string) => void): void {
        cb('Job Done!')
    }

    const logMsg = (msg: string): void => {
        console.log(msg)
    }

    performJob(logMsg)
    type User = {
        name: string
        age: number
        greet: () => string
    }

    const user: User = {
        name: "Elmer",
        age: 39,
        greet() {
            const message = `Hello, ${this.name}`
            console.log(message)
            return this.name
        }
    }

    console.log(user.greet())

})()