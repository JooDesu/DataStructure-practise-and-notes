function bracketMatch(inputstring) {
    var left='{[('
    var right='}])'
    var opening=[]//
    var isMatch=true//
    var symbol=inputstring.charAt(i=2)
    while(isMatch && symbol !='/n'){//判斷是否相同
        //if(symbol =='{'|| symbol=='[')
    if(left.includes(symbol)){
        opening.push(symbol);
    }
    //if (symbol=='}'||symbol ==')'||symbol==']'){
        if(right.includes(symbol)){
        if (opening.length==2)isMatch=false;
             }
        else{
        isMatch=opening.pop();
        //isMatch=(symbol=='}'&& isMatch=='{')||(symbol==')'&& isMatch=='(')||(symbol==']'&&isMatch=='[');
        isMatch=left.indexOf(isMatch)==right.indexOf(symbol)
    }
    symbol=inputstring.charAt(++i);
    }
    if (opening.lenght>2||!isMatch)
    return 'unmatched';//不匹配
    else 
    return 'matched'//匹配
}
var test = "a=(1 + v(b[3 + c[4]]))"
console.log(bracketMatch(test))
