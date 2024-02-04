class User{
    constructor(username){
        this.username = username; 
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }
    
    static createId(){
        return `123`;
    }
}


const sagar = new User("Sagar");
// console.log(sagar.createId());

class Teacher extends User{
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone);