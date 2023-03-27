// Generics
function showStringData(a) {
    return a;
}
function showNumberData(a) {
    return a;
}
// => Nếu như này thì hàm sẽ bị cố định quá cho lên người ta sinh ra cách dưới này
function showData(a) {
    return a;
}
showData("hehe");
var numArr1 = [1, 2, 3, 4, 5, 7];
var stringArr1 = ["Le", "Duc", "Manh"];
// const result = numArr.map(item => {
//     return item * item
// })
var we17307_map = function (arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i], i);
        temp.push(newItem);
    }
    return temp;
};
var result1 = we17307_map(stringArr1, function (item, index) {
    return item + "-we17307" + " " + index;
});
console.log(result);
