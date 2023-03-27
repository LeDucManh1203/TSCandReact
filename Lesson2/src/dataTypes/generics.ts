// Generics
function showStringData(a: string): string {
    return a
}
function showNumberData(a: number): number {
    return a
}
// => Nếu như này thì hàm sẽ bị cố định quá cho lên người ta sinh ra cách dưới này

function showData<T>(a:T):T{
    return a
}
showData<string>("hehe")

const numArr1 = [1,2,3,4,5,7]
const stringArr1 = ["Le","Duc","Manh"]

// const result = numArr.map(item => {
//     return item * item
// })

const we17307_map = <T>(arr: T[], callback: (item: T, index: number) => T): T[] => {
    let temp = []
    for(let i = 0; i < arr.length; i++) {
        const newItem = callback(arr[i], i)
        temp.push(newItem)
    }
    return temp
}

const result1 = we17307_map(stringArr1, (item, index) => {
    return item + "-we17307" + " " + index
})

console.log(result);
