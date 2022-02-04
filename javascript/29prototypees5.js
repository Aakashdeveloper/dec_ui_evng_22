function human(name,city) {
    this.name = name
    this.city = city
}

function robot(name) {
    this.name = name
    this.age = 10
    this.legs = 2
}


var john = new human('John','Delhi')

human.prototype= new robot()

var amit = new human('Amit','Paris')

var john = new human('John','Delhi')
john
human {name: 'John', city: 'Delhi'}city: "Delhi"name: "John"[[Prototype]]: Object
john.age

human.prototype= new robot()
robot {name: undefined, age: 10, legs: 2}
var amit = new human('Amit','Paris')
undefined
amit
human {name: 'Amit', city: 'Paris'}
amit.age
10
amit.legs
2