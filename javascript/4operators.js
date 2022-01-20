=  // assignment
== // compare the data
=== // compare the data and datatype


var a = "10" //assignment
var b = 10

a == b  
true
a === b
false

var c = 20
b == c
false

var a = "john"
var b = "John"
a == b // javascript is case sensitive
false
a === b
false


var a = 1
var b = true
a == b
true
a === b
false

var a = true
var b = "true"
a==b
false
a === b
false

var a = 10
var b = 20
undefined
a >b
false
a<b
true
a != b
true
a >=b
false
a => b
a => b
a <= b
true

// negation
var a = true
!a
false

var a = 1
!a
false

var a = 6
!a
false

var a = 0
!a
true

var a = -1
!a
false

truthy > any number expect 0 weather +ve or -ve, true,string
falsey > 0, false, null, undefined

isNaN("hi")
true
isNaN(1)
false