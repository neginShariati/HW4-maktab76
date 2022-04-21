function date(sp) {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    if (day < 10) {
        day = '0' + day
    }
    if (month < 10) {
        month = '0' + month
    }
    today = year + '-' + month + '-' + day;
    if (sp === '-'){
        return today;
    }
    if (sp === '/'){
        return today.split('-').join('/');
    }
}
console.log(date('-'));
console.log(date('/'));