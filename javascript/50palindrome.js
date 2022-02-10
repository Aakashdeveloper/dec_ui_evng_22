1221
12321
123421


var palindrome = (data) =>{
    let rem,temp,final = 0;
    temp = data;
    while(data>0){
        rem = data%10;
        data = parseInt(data/10);
        final = final*10+rem
    }
    if(final == temp){
        console.log(`Number ${temp} is palindrome`)
    }else{
        console.log(`Number ${temp} is not a palindrome`)
    }
}

palindrome(1221)
VM344:10 Number 1221 is palindrome
undefined
palindrome(124421)
VM344:10 Number 124421 is palindrome
undefined
palindrome(1244321)
VM344:12 Number 1244321 is not a palindrome