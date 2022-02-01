> map is use to iterate over the array of elements
> it always return the same length of output as input 
> it is use to apply logics (add, sub, mul, div) or iterate over html

var a = [4,55,9,4,6,88,11,34,6,18,27]
a.map((data) => {return data*2})
[8, 110, 18, 8, 12, 176, 22, 68, 12, 36, 54]


var a = [4,55,9,4]
a.map((data) => {return `<p>${data*2}</p>`})
['<p>8</p>', '<p>110</p>', '<p>18</p>', '<p>8</p>']

var a = [4,55,9,4,6,88,11,34,6,18,27]
a.map((data) => {return data>25})
(11) [false, true, false, false, false, true, false, true, false, false, true]

> filter is use to filter out the data
> it may or may not return the same length of output Array
> it only return those value for which output or condition is true

var a = [4,55,9,4,6,88,11,34,6,18,27]
a.filter((data) => {return data>25})
(4) [55, 88, 34, 27]

var a = [-1,0,1,2,3]
a.map((item) => {return item*2} )
[-2, 0, 2, 4, 6]

a.filter((item) => {return item*2} )
[-1, 1, 2, 3]