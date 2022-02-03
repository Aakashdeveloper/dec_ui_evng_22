/*var firstname = "Michal"
var lastname = "Peter"

var sayHi = {
    firstname: 'Zoe',
    lastname: 'Lisa',
    greet:function(){
        return `Say Hi to ${firstname} ${lastname}`
    }
}

console.log(sayHi.greet())
//Say Hi to Michal Peter*/

var firstname = "Michal"
var lastname = "Peter"

var sayHi = {
    firstname: 'Zoe',
    lastname: 'Lisa',
    greet:function(){
        return `Say Hi to ${this.firstname} ${this.lastname}`
    }
}

console.log(sayHi.greet())
Say Hi to Zoe Lisa