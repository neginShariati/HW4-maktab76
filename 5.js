function mergeArrays(arr1 , arr2){
    let arr = arr1.concat(arr2);
    console.log(arr);
    let newArray = [];
    for (let i = 0 ; i < arr.length ; i++){
        if (newArray.indexOf(arr[i]) === -1){
            newArray.push(arr[i]);        
        }       
    }
    return newArray;
}
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];
console.log(mergeArrays(array1 , array2));