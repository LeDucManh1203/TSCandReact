//Array
var arr = [1, 2, 3];
var arr2 = ["a", "b"];
var arr3 = [["a", "b", "c"], ["d", "e"]];
//Tupels
var tuple = ["Le Manh", "Ha Noi", 20];
//Enum
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["USER"] = 1] = "USER";
})(ROLE || (ROLE = {}));
var role = ROLE.ADMIN;
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["SUCCESS"] = 200] = "SUCCESS";
    STATUS_CODE[STATUS_CODE["CLIENT_ERROR"] = 400] = "CLIENT_ERROR";
    STATUS_CODE[STATUS_CODE["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(STATUS_CODE || (STATUS_CODE = {}));
var code = STATUS_CODE.SUCCESS;
//
var showInfo = function (name, age) {
    if (typeof name == "string") {
        console.log(name.toUpperCase);
    }
};
showInfo("Duy", "20");
// ve doc ham va doi tuong
