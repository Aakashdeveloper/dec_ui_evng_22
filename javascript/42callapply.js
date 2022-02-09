var person = {
    fullname:function(){
        return this.firstName+" "+this.lastName
    }
}

var John = {
    firstName:'John',
    lastName:'Dave'
}

person.fullname.call(John)
'John Dave'
person.fullname.apply(John)
'John Dave'

var person = {
    fullname:function(city,country){
        return this.firstName+" "+this.lastName+" "+city+" "+country
    }
}

var John = {
    firstName:'John',
    lastName:'Dave'
}

person.fullname.apply(John,'Delhi','India')
VM249:1 Uncaught TypeError: CreateListFromArrayLike called on non-object

person.fullname.call(John,'Delhi','India')
'John Dave Delhi India'

person.fullname.call(John,['Delhi','India'])
'John Dave Delhi,India undefined'
person.fullname.apply(John,['Delhi','India'])
'John Dave Delhi India'