const calc = (opt) => {
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let out;
    if(opt == 'add'){
        out = `Sum of number is ${Number(a)+Number(b)}`
    }else{
        out = `Sub of number is ${a-b}`
    }
    document.getElementsByClassName('output')[0].innerText=out
}

/*function add(){
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let out = Number(a)+Number(b)
    document.getElementsByClassName('output')[0].innerText=`Sum of number is ${out}`
}
const sub = () => {
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let out = a-b
    document.getElementsByClassName('output')[0].innerText=`Sub of number is ${out}`
}*/