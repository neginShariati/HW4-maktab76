function removeFirstOccurrence(str , word){
    if (str.indexOf(word) === -1){
        return str; 
    }else{
        return str.slice(0 , str.indexOf(word)) + 
            str.slice(str.indexOf(word) + word.length+1);
    }    
}
console.log(removeFirstOccurrence(`"The quick brown fox jumps over the lazy dog"`, 'the'));
