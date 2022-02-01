regular expression
RegExp

// if pattern does not match it will return null

// this only look for single letter in lowercase a-z
var a = "hi"
a.match("^([a-z])$")


var a = "h"
a.match("^([a-z])$")
['h', 'h', index: 0, input: 'h', groups: undefined]


// this only look for 2 letter in lowercase a-z
var a = "hi"
a.match("^([a-z]{2})$")
['hi', 'hi', index: 0, input: 'hi', groups: undefined]

// this only look for in range of 2 to 5 letter in lowercase a-z
var a = "hii"
a.match("^([a-z]{2,5})$")

// match any length letter in lowercase a-z
var a = "hii"
a.match("^([a-z]+)$")


var a = "Hii"
a.match("^([A-Za-z]+)$")
(2) ['Hii', 'Hii', index: 0, input: 'Hii', groups: undefined]

var num = 9875674834
num.match("^([0-9]{10})$")
num.match is not a function

var num = 9875674834
num.toString().match("^([0-9]{10})$")
(2) ['9875674834', '9875674834', index: 0, input: '9875674834', groups: undefined]

var str = "this hat is hot haat"
str.match(/h.t/g)
['hat', 'hot']


var str = "this hat is hot haat"
str.match(/h..t/g)
['haat']

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ['a@a.com', 'a', 'a', 'com', index: 0, input: 'a@a.com', groups: undefined]
var email = "@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "aa.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null