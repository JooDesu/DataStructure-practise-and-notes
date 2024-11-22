var ary2d=[
    [1,1,0,1,1,0], //index 0
    [1,0,1,1,0,1], //index 1
    [1,0,1,0,0,0], //index 2
    [1,0,1,1,0,1], //index 3
    [1,0,1,0,0,0]  //index 4
];
//max _row=0...4, _col=0...5
// [1][2]=>
// [0][1],[0][2],[0][3]     =>[_row-1][_col-1],[_row-1][_col],[_row-1][_col+1]
// [1][1],[_row][_col],[1][3]=>[_row][_col-1],[_row][_col],[_row][_col+1]
// [2][1],[2][2],[2][3]      =>[_row+1][_col-1],[_row+1][_col],[_row+1][_col+1]

var row=ary2d.length;//宣告row的值
var col=ary2d[0].length;//宣告columm的值

//draw map
var canvas = document.getElementById("map").getContext("2d");//從2dArrayhtml所設定的格子和數量放入該程式裏
var size=Math.min(canvas.canvas.height/row, canvas.canvas.width/col);//該圖面積的大小和格子數量
for(var _row=0;_row<row;_row++){
    for(var _col=0;_col<col;_col++){
        //ar2d[_row][_col]=>0,1
        if(ary2d[_row][_col]==1){
            canvas.fillStyle="#0000ff"//上顔色
        }else{
            canvas.fillStyle="#000000"//上色
        }
        //600/5=>120  coordinate x,y , width, heigth
        canvas.fillRect(_col*size,_row*size,size,size);
        canvas.strokeRect(_col*size,_row*size,size,size);
    }
}

function neighbor(_row,_col){//格子周圍的鄰居
   var count=0;
   //visit 8 neighbor

   return count;

}