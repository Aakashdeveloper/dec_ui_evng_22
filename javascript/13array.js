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