class User {
    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    login(){
        console.log(`${this.username} giris yapti.`)
        return this;
    }

    logout(){
        console.log(`${this.username} cikis yapti.`);
        return this;
    }
}

const userOne = new User('ozkan', 'ozkan@hotmail.com');
const userTwo = new User('can', 'can@hotmail.com');

console.log(userOne.login().logout().logout());