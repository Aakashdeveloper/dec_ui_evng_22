for
while
do while
for of > array
for in > object
////////////
for > generate the series of value of help to iterate over array
////////////

for(starting, condition, increment)

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Boston']
for(i=0;i<city.length;i++){
    console.log(city[i])
}
Delhi
Mumbai
London
Helsinki
Boston

var city = ['Delhi', 'Mumbai',['Red','Yellow','Green','Orange'], 'Helsinki', 'Boston']
for(let i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }  
}
////////
while
///////
var i = 10;
while(i<5){
    console.log(i);
    i++
}

////////
Do while
///////
var i =10;
do{
    console.log(i);
    i++
}
while(i<5)

////////
for of
////////
var city = ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Boston'];

for(mycity of city){
    console.log(mycity)
}


var city = ['Delhi', 'Mumbai',['Red','Yellow','Green','Orange'], 'Helsinki', 'Boston']

for(mycity of city){
    if(Array.isArray(mycity)){
        for(color of mycity){
            console.log(color)
        }
    }else{
        console.log(mycity)
    }
}