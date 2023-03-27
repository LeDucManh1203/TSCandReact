var numArr2 = [1, 5, 4, 2, 3, 8];
function sort(array, callback) {
    var n = array.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = i + 1; j < n; j++) {
            if (callback(array[i], array[j]) > 0) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
var sapxep = sort(numArr2, function (a, b) { return a - b; });
console.log(sapxep);
