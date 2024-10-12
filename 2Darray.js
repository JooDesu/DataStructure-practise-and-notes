var ary2d=[
    [1,2,3],//第一個值(index 0)
    [4,5,6],//第二個值(index 1)
    [7,8,9],//第三個值(index 2)
];
ary2d[1][2]//第一個[]是代表第幾行(row)而第二個[]是代表第幾排(columm)
//比如ary2d[1][2]會是index1[4,5,6]和index1的6
var Ans=[0,1,2,3,4,5,6,7,8,9]
//how to get index 0 at Ans??答案是Ans[0]=0
//ary2d[2][1]答案是8
ary2d[1].push("N");//把一個N的值塞入index 1將會展現出
[
    [1,2,3]
    [4,5,6,"N"]
    [7,8,9]
]
ary2d.push("N")//把“N”的值塞入整個
[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    "N"
];
//如何把["A","B","C"]放入ary2d(兩種寫法)
ary2d.push(["A","B","C"])//第一種寫法
//ary2d[3].push("A")
//ary2d[3].push("B")
//ary2d[3].push("c")
console.log(ary2d)
//第二種寫法
//var newary2d=["A","B","C"]
//ary2d.push(newary2d)
//Dynamic
var row=9,col=7
var dynaAry2d=[];
for(var _row=0;_row<row;_row++){//將會加到有9行為止
dynaAry2d.push([])};
for(var _col=0;_col<col;_col++){//將會加到有7排數字為止
dynaAry2d[_row].push(_col+_row*col);//將會將數字乘排數
}
