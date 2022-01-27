ifelse > multiple condition and multiple output
ternary > one condition and one output
switch > one condition and multiple output

var name = "Bhumika"
switch(name){
    case "Aakash":
        console.log(`Hi ${name}`)
        break;
    case "Bhumika":
        console.log(`Hi ${name}`)
        break;
    case "Eva":
        console.log(`Hi ${name}`)
        break;
    default:
        console.log(`Hi Unknown`)
}

var input = 2
switch(input%2){
    case 0:
        console.log(`Hi ${input} is even`)
        break;
    case 1:
        console.log(`Hi ${input} is odd`)
        break;
    default:
        console.log(`Hi Unknown`)
}


switch(new Date().getDay()){
    case 0:
        console.log(`Today is sunday`)
        break;
    case 1:
        console.log(`Today is monday`)
        break;
    case 4:
        console.log(`Today is Thrusday`)
        break;
}

Today is Thrusday