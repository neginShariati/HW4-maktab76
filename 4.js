function remove(array){ 
    let arr = array.filter(function(item){
        if(item !== null || item !== 0 || item !== false 
         || item !== NaN || item !== undefined || item !== '""'){
            return item;
        }
    });
        console.log(arr);
}
let arr2 = [null , 0 , "negin" , undefined , 2 , 3 , NaN , "" , false];
remove (arr2);
