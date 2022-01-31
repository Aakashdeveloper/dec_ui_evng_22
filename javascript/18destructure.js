var [a,b] = [10,20]
undefined
a
10
b
20
var a = [10,20,30]
undefined
var [c,d] = a
undefined
c
10
b
20



function test(){
    return [1,2,3]
}

let [h,g] = test()
h
1
g
2


var y = {1:10,m:20}
var {1:abc,m:xyz} = y
abc
10
xyz
20