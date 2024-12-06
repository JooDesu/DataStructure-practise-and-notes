//recursive
var readline = require("readline-sync");
var n = readline.questionInt("Please input an intger?");
var count=0;
var dis=Fab(n);
console.log( dis );
console.log( dis>384401000?">":"<");//结论是否有超过3844010000

function Fab(n){//呼叫自己的值直到输入的值如输入42，就会停在42
    count++;
    if(n<=1)
        return 1;
    else 
        return Fab(n-1)+Fab(n-2);
}
//384401000
//iteration

console.log(count)