class User {
    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    login(){
        return `${this.username} giris yapti.`;
    }

    logout(){
        return `${this.username} cikis yapti.`;
    }
}

const userOne = new User('ozkan', 'ozkan@hotmail.com');
const userTwo = new User('can', 'can@hotmail.com');
console.log(userOne.login(), userTwo.logout());
