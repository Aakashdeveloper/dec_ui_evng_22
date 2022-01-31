function
method
Arrow function
iffi
Generator
////////////////////////////////////////////////////////////////
var a = 20
var b = 30
a+b
50
////////////////////////////////////////////////////////////////
keyword nameoffunction(parameter){
    return
}

function add(a,b){
    return a+b
}

add(1,2)
3
add(5,4)
9
add('a','b')
'ab'

function isEven(userInput){
    var out;
    if(userInput%2==0){
        out =`Number ${userInput} is even`
    }else{
        out =`Number ${userInput} is odd`
    }
    return out
}

isEven(5)
'Number 5 is odd'
isEven(51)
'Number 51 is odd'
isEven(90)
'Number 90 is even'

function add(a,b){
    return a+b
}
undefined
add(1,2,3)
3
add(5,4,1)
9
function add(a,b,c){
    return a+b+c
}
undefined
add(2,4)
NaN
add('A','B')
'ABundefined'
add(5,9,6)
20

///METHOD///
function add(a,b,c){
    return a+b+c
}

let add = function(a,b){
    return a+b
}

add(1,2)

//arrow function

let add = (a,b) => {
    return a+b
}

add(1,2)
3

////////Rest Es6//////

function add(...args){
    console.log(args)
}
add(1,2,3)
[1, 2, 3]

add(5,99,23,'a')
[5, 99, 23, 'a']


function add(...args){
    let out = 0;
    for(data of args){
        out += data
       // out = out+data
    }
    return out
}

add(1,3,5,9)
18
add(1,3)
4