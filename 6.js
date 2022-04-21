function sumNumbers(arr){
    let getSum = arr.reduce(function(acc , val){
        return acc + val;
    } , 0);
    console.log("sum is:" , getSum);
    console.log("the round of sum is:" , Math.round(getSum));
}
let numbers = [15.5, 2.3, 1.1, 4.7];
sumNumbers(numbers);