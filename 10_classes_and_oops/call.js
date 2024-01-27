function SetUsername(username){
    //complex DB calls
    this.username = username;
    console.log("Called");
}

function createUser(username, email, password){
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const coffee = new createUser('coffee', "coffee@rock.dev", "123");
console.log(coffee);