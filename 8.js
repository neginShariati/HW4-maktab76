function monthName(date){
    var month = date.split('-');
    var month = month[1];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Des'];
    var monthName = months[month - 1];
    return monthName;
}
console.log(monthName('2010-12-12'))