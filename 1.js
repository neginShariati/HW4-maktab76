function exponent(number, power){
    if(power === 0){
        return 1;
    }
    else{
        return number * exponent(number, power - 1);
    }
}
console.log(exponent(3, 3));