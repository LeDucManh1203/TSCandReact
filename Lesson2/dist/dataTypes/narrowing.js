function printInfo(info) {
    if (typeof info === "string") {
        return info.charAt(0).toUpperCase() + info.slice(1);
    }
    return info;
}
console.log(printInfo("manh"));
// Optinal
function check(sinhvien) {
    if (!!sinhvien) {
        return sinhvien.name;
    }
}
// instrance
var date = new Date();
function checkDate(date) {
    if (date instanceof Date) {
        return date.getDate();
    }
}
var LEVEL1;
(function (LEVEL1) {
    LEVEL1[LEVEL1["MANAGER"] = 0] = "MANAGER";
    LEVEL1[LEVEL1["STAFF"] = 1] = "STAFF";
})(LEVEL1 || (LEVEL1 = {}));
function login(user) {
    if ("is_admin" in user && user.is_admin === true) {
        console.log("Welcome to admin");
    }
    else {
        console.log("Welcome to backs");
    }
}
