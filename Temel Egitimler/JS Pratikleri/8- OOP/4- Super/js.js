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

class Admin extends User{
    constructor(username, email, title) {
        super(username, email);
        this.title = title;
    }

    deleteUser(userArrived){
        users = users.filter(user => user.username !== userArrived.username);
    }
}

const userOne = new User('ozkan', 'ozkan@hotmail.com');
const userTwo = new User('can', 'can@hotmail.com');
const userThree = new Admin('messi', 'messi@hotmail.com', 'goat');

console.log(userThree);