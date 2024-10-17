var row=6,columme=8
for (var i=0;i<row;i++){
for (var s=0;i<columme;s++){
    var randomrow=Math.floor(Math.random()*row)
    var randomcolumme=Math.floor(Math.random()*columme)
}var dynaAry2d=[];//空的值
for(var _row=0;_row<row;_row++){//將會加到有6行為止
dynaAry2d.push([])};//把以上行的值塞入裡面
//[]
//[]
//[]
//[]
//[]
//[]
//[]
//[]
//[]
for(var _row=0;_row<row;_row++){
for(var _col=0;_col<col;_col++){//將會加到有8排為止
dynaAry2d[_row].push(_col+_row*col);
}
}
}
console.log(dynaAry2d)