var ones=['','one','two','three','four','five','six','seven','eight','nine'];
var tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

module.exports = function toReadable (number) {

    if (number == 0 || number == '')
    return "zero"
    var mas = [];
    let i = 0;
    let str = "";
    while(number > 0) {
      mas[i] = number % 10;
      number = Math.floor(number / 10);
      i++;
    }
    
    long = mas.length;
    
    if (long == 1){
    str += " " + (ones[mas[0]])
    }
    else if(long == 2){
    if (mas[1] == 1){
    str += " " + (teens[mas[0]])
    }else{
    str += " " + (tens[mas[1]])
    str += " " + (ones[mas[0]])
    }}
    else if (long == 3){
    str += (ones[mas[2]]) + " hundred"
    if (mas[1] == 1){
    str += " " + (teens[mas[0]])
    }else{
    str += " " + (tens[mas[1]])
    str += " " + (ones[mas[0]])
    }
    }
    return str = str.replace(/ +/g, ' ').trim();
}