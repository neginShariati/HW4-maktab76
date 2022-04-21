function protectEmail(email){
    let text = email;
    let str = "";
    for (let i = 0 ; i < text.length ; i++){
        if ( i > 4 && i < text.indexOf("@")){   
            str += "."; 
        }else {
            str += text[i];
        }
    }
        return str;
}
console.log(protectEmail("robin_singh@example.com"));