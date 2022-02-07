//interval > rum some operation after certain interval of time
//timeout > run only once after certain interval of time

setInterval(function(){},time)

var myinterval = setInterval(function(){
    console.log(Math.random())
},2000)

0.14015885218282698
0.945874452319913
0.41063591505126595

clearInterval(myinterval)

////

setTimeout(function(){
    console.log(Math.random())
},5000)
2
0.9317133072379424