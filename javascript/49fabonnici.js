[0,1,1,2,3,5,8,13,21]

var fabonicci = function(n){
    if(n==1){
        return [0,1]
    }else{
        var data = fabonicci(n-1);
        data.push(data[data.length-1]+data[data.length-2])
        return data
    }
}

fabonicci(5)
(6) [0, 1, 1, 2, 3, 5]
fabonicci(20)
(21) [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]