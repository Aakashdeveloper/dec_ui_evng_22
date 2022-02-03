var movieName = "Avengers"
var movieRating = 4.5
var movieLang = "English"

var movieName1 = "Jab We Met"
var movieRating1 = 4.8
var movieLang1 = "Hindi"

var movie = {
    name:'Avengers',
    rating:4.5,
    lang:'English'
}
undefined
movie
{name: 'Avengers', rating: 4.5, lang: 'English'}
movie.name
'Avengers'
movie.rating
4.5
movie.lang
'English'
movie.rating = 4.7
4.7
movie
{name: 'Avengers', rating: 4.7, lang: 'English'}

movie.ind = "Hollywood"
'Hollywood'
movie
{name: 'Avengers', rating: 4.7, lang: 'English', ind: 'Hollywood'}
delete movie.lang
true
movie
{name: 'Avengers', rating: 4.7, ind: 'Hollywood'}

movie['name']
'Avengers'
movie['rating'] = 4.9
4.9
movie
{name: 'Avengers', rating: 4.9, lang: 'English'}

//JSON
> Javascript Object Notation

var movies = [
    {
        name:'Avengers',
        rating:4.5,
        lang:'English'
    },
    {
        name:'Jab we Met',
        rating:4.8,
        lang:'Hindi'
    }
]
movies[1].name
'Jab we Met'

for(mymovie of movies){
    console.log(mymovie.name)
}


var movie = {
    name:'Avengers',
    rating:4.5,
    lang:'English'
}

for(key in movie){
    console.log(key)
}
name
rating
lang

for(key in movie){
    console.log(movie[key])
}

Avengers
4.5
English