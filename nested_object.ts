// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript
const transformValue = obj => {

    const handleString = (value: string) => {
        return `${value} AI`
    }

    const handleNumber = (value: number) => {
        return value + 1
    }
    const handleArray = (value) => {
        return value.map((item) => item = item + 1)
    }

    const renderObject = (obj) => {

        for (const [key, value] of Object.entries(obj)) {
            if (typeof (value) === "string") {
                obj[key] = handleString(value)
            }
            if (typeof (value) === "number") {
                obj[key] = handleNumber(value)
            }
            if (Array.isArray(value)) {
                obj[key] = handleArray(value)
            }
            if (typeof (value) === "object") {
                obj[key] = renderObject(value)
            }        
        }
        return obj
    }
    let results = renderObject(obj)
    return results;


};

let data = {
    a: 123,
    b: 'hero',
    c: [1, 2, 3],
    d: {
        e: 3,
        f: ['abc', 'def']
    },
    y: 403,
}
transformValue(data)




 // To learn more about the language, click above in "Examples" or "What's New".
 // Otherwise, get started by removing these comments and the world is your playground.
