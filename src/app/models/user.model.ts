export class User{

    constructor(
        public name: string,
        public email: string,
        public role: string = "USER_ROLE",
        public image: string = "",
        public password?: string,
        public google?: boolean,
        public id?: number,
    ){}
    
}