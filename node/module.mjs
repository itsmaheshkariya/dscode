class User{
    constructor(){
         this.name = "Mahesh"
    }
    getFullName(){
        return this.name
    }
}

let go = new User()
console.log(go.getFullName())