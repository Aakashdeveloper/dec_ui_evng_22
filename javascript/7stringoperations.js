var city = "lONdOn"
undefined
city.toUpperCase()
'LONDON'
city.toLowerCase()
'london'
city.length
6
city[0]
'l'
city[5]
'n'
city[city.length-1]
'n'

var name = "  Nikita  "
undefined
name.length
10
name.trim()
'Nikita'
name.trim().length
6
var name = "  Nikita . "
undefined
name.trim()
'Nikita .'

var a = "JOHN"
undefined
var b = "john"
undefined
a == b
false
a.toLowerCase() == b.toLowerCase()
true


var city = "amsTERdAm"
city.charAt(0)
'a'
city.charAt(2)
's'
city.charAt(-1)
''
city.at(-1)
'm'
city.at(-2)
'A'
city.at(4)
'E'

var city = "amsTERdAm"
undefined
city.slice(1)
'msTERdAm'
city.slice(2)
'sTERdAm'
city.slice(0, 3)
'ams'
city.slice(2, 5)
'sTE'
city.slice(2, 50)
'sTERdAm'
city.slice(-2)
'Am'
city.slice(-4)
'RdAm'
city.slice(0,-1)
'amsTERdA'
city.slice(0,-2)
'amsTERd'
city.slice(-2,-5)
''
city.slice(-5,-2)
'ERd'
city.slice(-2,2)
''
city.slice(2,-3)
'sTER'

var city = "amsTERdAm"
undefined
city.charAt(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'
var city = "lONdOn"
undefined
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'London'

var a = "i am learning javascript"
a.replace('javascript','JS')
'i am learning JS'

var a = "javascript i am learning javascript"
a.replace('javascript','JS')
'JS i am learning javascript'
a.replace(/javascript/g,'JS')
'JS i am learning JS'

var name = "  Nikita . "
name.replace(/ /g,'')
'Nikita.'
name.replace(/ /g,'-')
'--Nikita-.-'


var url = "https://github.com/Aakashdeveloper/jan_react_evng_22"
undefined
url.split('/')
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'jan_react_evng_22']
var out = url.split('/')
undefined
out[out.length-1]
'jan_react_evng_22'
var a = "javascript i am learning javascript"
undefined
a.split(' ')
(5) ['javascript', 'i', 'am', 'learning', 'javascript']
var a = "Javascript"
undefined
a.split('')
(10) ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
var a = ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
undefined
a.toString()
'J,a,v,a,s,c,r,i,p,t'
a.toString().replace(/,/g,'')
'Javascript'
var a = 10
undefined
a.toString()
'10'