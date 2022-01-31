var input = [1,2,3,4]

function add(a,b,c,d){
    return a+b+c+d
}

add(input)
'1,2,3,4undefinedundefinedundefined'
add(...input)
10


var input = [1,2,3,4]
function add(...args){ ///>>>>>Rest
    let out = 0;
    for(data of args){
        out += data
       // out = out+data
    }
    return out
}
add(...input) ///>>>>>Spread



var input = [1,2,3,4]
var city = ["Delhi","Mumbai","London","Helsinki"]

var city = ["Delhi","Mumbai",...input,"London","Helsinki"]
city
(8) ['Delhi', 'Mumbai', 1, 2, 3, 4, 'London', 'Helsinki']