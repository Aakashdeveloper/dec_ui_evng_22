var calc = {
    sum: function(a,b) {return a+b},
    sub:(a,b)=>{return a-b}
}
calc.sum(3,5)
8
calc.sub(3,5)
-2

var dbQuery = {
    find:(table) => {return `Select * from ${table}`},
    insert:(table,data) => { return `insert into ${table} name,city values(${data.name},${data.city})`}
}

dbQuery.find('students')
'Select * from students'
dbQuery.insert('Student',{name:'John',city:'Keev'})
'insert into Student name,city values(John,Keev)'


var movie = {
    name:'Avengers',
    rating:4.5,
    lang:'English'
}

//you can only update the property
Object.seal(movie)
{name: 'Avengers', rating: 4.5, lang: 'English'}
movie.name
'Avengers'
movie.rating = 4.9
4.9
movie
{name: 'Avengers', rating: 4.9, lang: 'English'}
delete movie.name
false
movie.ind="Hollywood"
'Hollywood'
movie
{name: 'Avengers', rating: 4.9, lang: 'English'}

//you cannot only update/delete/add the property
Object.freeze(movie)
{name: 'Avengers', rating: 4.5, lang: 'English'}
movie.name
'Avengers'
movie.rating = 4.9
4.9
movie
{name: 'Avengers', rating: 4.5, lang: 'English'}
delete movie.name
false