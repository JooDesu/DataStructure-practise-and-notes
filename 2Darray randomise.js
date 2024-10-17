var readline = require("readline-sync");
var row=6,columme=8;
var ary=[];//用來將數字丟入陣列裡
for (var i=0;i<row;i++){
    ary.push([]);//每個數字會放入陣列
    for (var s=0;s<columme;s++){
    //var randomrow=Math.floor(Math.random()*row)
    //var randomcolumme=Math.floor(Math.random()*columme)
    var randomvalue=Math.floor(Math.random()*100);//x100為了取得0~99數字 
    ary[i].push(randomvalue);//取得陣列值然後把隨機數字放入陣列裡       
}}
console.log(ary);


function getcoordinate(row,columme){//取得坐標
    if(row>=0 && row<ary.length && columme>=0 && columme<ary[row].length){//判斷是否符合陣列範圍的條件
        return ary[row][columme];
    }else{return "坐標超出範圍"}
    }

while(true){
    var row=readline.questionInt("請輸入0到5行的坐標或者輸入-1結束查詢");
    if(row==-1)break;
    var columme=readline.questionInt("請輸入0到7排的坐標或者輸入-1結束查詢");
    if(columme==-1)break;
    var finalcoordinate=getcoordinate(row,columme);//取得坐標裡面的值
    console.log("你查詢坐標的值是"+finalcoordinate);//告訴使用者坐標的值
}
console.log("查詢結束");
