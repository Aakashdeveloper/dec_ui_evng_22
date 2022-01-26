if(condition){
    // do something
}else{
    // do something
}

var a = 6544
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 6544 is even

var a = 65441
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM47:5 Number 65441 is odd

var name = "Bhumika"
if(name == "Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name == "Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else{
    console.log(`Hi ${name} you are unknown`)
}
Hi Bhumika you are super admin

var name = "Bhumika"
var role = "User"

if(role == "Admin"){
    if(name == "Priya"){
        console.log(`Hi ${name} you are admin`)
    }else if(name == "Bhumika"){
        console.log(`Hi ${name} you are super admin`)
    }else{
        console.log(`Hi ${name} you are unknown`)
    }
}else if(role == "User"){
    if(name == "Priya"){
        console.log(`Hi ${name} you are user`)
    }else if(name == "Bhumika"){
        console.log(`Hi ${name} you are super User`)
    }else{
        console.log(`Hi ${name} you are unknown`)
    }
}else{
    console.log(`Hi ${name} you are unknown`)
}


var name = "Amit"; var role = "Admin"
if(name == "Tina" || role == "Admin"){
    console.log(`Hi ${name} you are welcome`)
}else{
    console.log(`Hi ${name} you are unknown`)
}
Hi Amit you are welcome

var name = "Amit"; var role = "Admin"
if(name == "Amit" && role == "Admin"){
    console.log(`Hi ${name} you are welcome`)
}else{
    console.log(`Hi ${name} you are unknown`)
}


let a = 1
if(a){
    console.log(`Hiii`)
}else{
    console.log(`Biee`)
}
Hiii

let b = 0
if(b){
    console.log(`Hiii`)
}else{
    console.log(`Biee`)
}
Biee

let c = -1
if(c){
    console.log(`Hiii`)
}else{
    console.log(`Biee`)
}
Hiii

var name = "Amit"
undefined
name == "Tina" 
false
name == "Amit" 
true

///////////
Ternary Operators
(single line if else condition)

condition ? if condition true: if condition false

var a = 10
a>10?"hii":"Biie"
'Biie'
var a = 10
a==10?"hii":"Biie"
'hii'

var a = 10
a>10?a+1:a-1
9
var a = 11
a>10?a+1:a-1
12