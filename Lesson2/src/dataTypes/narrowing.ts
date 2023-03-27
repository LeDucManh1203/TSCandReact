function printInfo(info: number | string){
    if (typeof info === "string") {
        return info.charAt(0).toUpperCase()+info.slice(1);
    }
    return info;
}
console.log(printInfo("manh"));

// Optinal

function check(sinhvien?:{name: string, grade:number}){
    if(!!sinhvien){
       return sinhvien.name;
    }
}

// instrance

const date = new Date()
function checkDate(date: Date | string){
    if(date instanceof Date){
    return date.getDate()
    }
}


// Union type (in)
interface User1 {
    // union type
    id: string | number,
    username: string,
    password: string,
    email: string,
}

enum LEVEL1{MANAGER, STAFF}

interface Admin1 extends User1 {
    id: string,
    is_admin: boolean,
    level: LEVEL1.MANAGER | LEVEL1.STAFF
}

function login(user: User1 | Admin1 ):void{
    if("is_admin" in user && user.is_admin === true){
        console.log("Welcome to admin");
    }else{
        console.log("Welcome to backs");
    }
}