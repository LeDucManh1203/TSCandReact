// 1. Khai báo hàm (Function declaration)
function func1() {
    console.log("func1");
    //-> kiểu này nó thể chạy trước khi khai báo. Ngta gọi là hoisting
}
const func2 = function () {

}

const func3 = () => {

}

// 2. Funciton return
function divede(): number {
    return; //-> sẽ trả về undefi
}
const showName = function (): string {
    return;
}

const func4 = function():void{
    console.log(4);
}

const showError = function():never{
    const err = new Error("lỗi")
    throw err;
}

//3. Function parameter
function divede1(a:number, b:number = 1):number{
    
    return a/b;
}

console.log(divede1(10,));

//4. Rest parameter

function printClass(name:string, ...classes:string[]):string{
return `sinh viên ${name} học lớp ${classes.join(", ")}`
}

console.log(printClass("Mạnh", "Typescript","Nodejs","Pháp luật"));

//5: Callback

const numArr = [1,2,3,4,5]
const result = numArr.map((item)=>{
    return item * item
})

