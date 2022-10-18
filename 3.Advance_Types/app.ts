function returnSomething<T>(data: T): T {
    return data;
}
// const showResult = returnSomething({name: 'Person-1',age: 20})
const showResult = returnSomething('Person-1')
console.log(showResult)
