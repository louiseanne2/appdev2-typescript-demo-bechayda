(() => {

    
    let a: null
    a = null
    console.log('a:', a)

    let b: null | string
    b = null
    console.log('b (null):', b)

    b = "Hi"
    console.log('b (string):', b)

    // Special Type - undefined
    let c: undefined
    c = undefined
    console.log('c:', c)

    let d: undefined | string
    d = undefined
    console.log('d (undefined):', d)

    d = "Hi"
    console.log('d (string):', d)

})()