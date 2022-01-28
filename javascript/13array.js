// array is a collection of homogeneous as well as heterogeneous data type

var a = ["hi","helloe","cbcf",'egeg',"gdg"] >>> array of strings
var b = [3,54,34,765,213,654,34] >>> array of numbers
var c = [true,false,false,true,true] >>> array of boolean

var d = ["bvdf","bdfb",3,43,true,544,"bdfb",true,false] >>> 

var city = ["Delhi","Mumbai","London","Helsinki"]
city.length
4
city[0]
'Delhi'
city[1]
'Mumbai'
city[2]
'London'
city[city.length-1]
'Helsinki'

var city = ["Delhi","Mumbai","London","Helsinki"]
undefined
typeof(city)
'object'


var city = ["Delhi","Mumbai","London","Helsinki"]
undefined
city.push("Boston")
5
city
(5) ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Boston']
city.push("Amsterdam")
6
city
(6) ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Boston', 'Amsterdam']
city
(6) ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Boston', 'Amsterdam']
city.pop()
'Amsterdam'
city.pop()
'Boston'
city
var city = ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Boston']
city.pop(300000)
'Boston'
var city = ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Boston']
city.pop()
'Boston'

var city = ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Boston']

city.shift()
'Delhi'
city.unshift('Amsterdam')
5
city
(5) ['Amsterdam', 'Mumbai', 'London', 'Helsinki', 'Boston']

push > add value in the end of the array
pop > remove the last value of array
shift > remove the first value of array
unshift > add in the beginig of array

var city = ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Boston']


city.slice(1)
(4) ['Mumbai', 'London', 'Helsinki', 'Boston']
city.slice(2)
(3) ['London', 'Helsinki', 'Boston']
city.slice(2,5)
(3) ['London', 'Helsinki', 'Boston']
city.slice(-1)
['Boston']
city.slice(0,-1)
(4) ['Delhi', 'Mumbai', 'London', 'Helsinki']
city
(5) ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Boston']

var city = ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Boston']
city.splice(start,deletecount,value)

//remove 1 value on index number 3
city.splice(3,1)
['Helsinki']

//form index number 2 do not delete but add 2 values
city.splice(2,0,'Nice','Venice')
[]
city
(6) ['Delhi', 'Mumbai', 'Nice', 'Venice', 'London', 'Boston']

//form index number 3 remove 1 value and add 2 values
city.splice(3,1,'Dubai','Amsterdam')
['Venice']
city
(7) ['Delhi', 'Mumbai', 'Nice', 'Dubai', 'Amsterdam', 'London', 'Boston']

var city = ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Boston']

city.indexOf('Mumbai')
1
city.indexOf('Delhi')
0
city.indexOf('Amsterdam')
-1
city.indexOf('Venice')
-1

var a = ["a","b",1,"c",2]
var b = [3,"d","e",4]
a+b
'a,b,1,c,23,d,e,4'
a.concat(b)
(9) ['a', 'b', 1, 'c', 2, 3, 'd', 'e', 4]


var a = "hi"
var b = [1,2,3]
Array.isArray(a)
false
Array.isArray(b)
true

var city = ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Boston']

city.sort()
(5) ['Boston', 'Delhi', 'Helsinki', 'London', 'Mumbai']
city.reverse()
(5) ['Mumbai', 'London', 'Helsinki', 'Delhi', 'Boston']

var city = ['Delhi', 'Mumbai',['Red','Yellow','Green',['Audi','Bmw','Merc'],'Orange'], 'Helsinki', 'Boston']

undefined
city[0]
'Delhi'
city[2]
(5) ['Red', 'Yellow', 'Green', Array(3), 'Orange']
city[2][0]
'Red'
city[2][1]
'Yellow'
city[2][3]
(3) ['Audi', 'Bmw', 'Merc']
city[2][3][1]
'Bmw'
city[2][3][0]
'Audi'

var city = ['Delhi', 'Mumbai',['Red','Yellow','Green',['Audi','Bmw','Merc'],'Orange'], 'Helsinki', 'Boston']

undefined
city.flat()
(9) ['Delhi', 'Mumbai', 'Red', 'Yellow', 'Green', Array(3), 'Orange', 'Helsinki', 'Boston']
city.flat(2)
(11) ['Delhi', 'Mumbai', 'Red', 'Yellow', 'Green', 'Audi', 'Bmw', 'Merc', 'Orange', 'Helsinki', 'Boston']