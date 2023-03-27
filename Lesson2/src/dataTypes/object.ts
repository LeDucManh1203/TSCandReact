// Interface

interface User {
    id: number,
    username: string,
    password: string,
    email: string,
}

enum LEVER { MANAGER, STAFF }

interface Admin extends User {
    is_admin: boolean,
    level: LEVER.MANAGER | LEVER.STAFF
}
//cung co the su dung type de lam nhu nay,

interface User {  
        login: () => void,
        logout: () => void
}
