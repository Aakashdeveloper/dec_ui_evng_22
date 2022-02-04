//es5
//var myObj = require('./first')
import myObj from './first';

console.log(myObj.user)

console.log(myObj.dbQuery.find('Employee'))


// [ { name: 'Alvin', city: 'Boston' }, { name: 'Priya', city: 'Paris' } ]
// Select * from Employee