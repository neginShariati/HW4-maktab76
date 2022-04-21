function sum(arr){
    let sum =0;
    for (let i = 0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum;
}
console.log(sum([3,4,2,5,9]));