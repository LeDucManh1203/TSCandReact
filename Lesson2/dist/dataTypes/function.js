// 1. Khai báo hàm (Function declaration)
function func1() {
    console.log("func1");
    //-> kiểu này nó thể chạy trước khi khai báo. Ngta gọi là hoisting
}
var func2 = function () {
};
var func3 = function () {
};
// 2. Funciton return
function divede() {
    return; //-> sẽ trả về undefi
}
var showName = function () {
    return;
};
var func4 = function () {
    console.log(4);
};
var showError = function () {
    var err = new Error("lỗi");
    throw err;
};
//3. Function parameter
function divede1(a, b) {
    if (b === void 0) { b = 1; }
    return a / b;
}
console.log(divede1(10));
//4. Rest parameter
function printClass(name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    return "sinh vi\u00EAn ".concat(name, " ho\u0323c l\u01A1\u0301p ").concat(classes.join(", "));
}
console.log(printClass("Mạnh", "Typescript", "Nodejs", "Pháp luật"));
//5: Callback
var numArr = [1, 2, 3, 4, 5];
var result = numArr.map(function (item) {
    return item * item;
});
