var MAZE = [//製作迷宮地圖，1代表墻壁，0代表代表道路
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];//1,1  end:8,10

//object oriented
class Point{
  constructor(_row, _col){//用來定義與判斷開頭與結尾處於格子位置
    this.row = _row;
    this.col = _col;
  }
  isEnd = function(){//回傳終點的坐標
    return this.row==end.row && this.col==end.col
  }
}
var start= new Point(1,1);//{row:1,col:1}開頭
var end = new Point(8,10);//[8,10]結尾
var Stack=[];
var step = start;
var rollback=false;//避免在路徑上無法經過重複地點

function go(){
     Stack.push(step);
     MAZE[step.row][step.col]=2;//用來告訴這條路已經走過，以免一直重複走相同路綫
     //function is_true(_row,_col){
        //return(_row>=0 && _row<MAZE.length && _col>=0 && _col<MAZE[0].lenght)//從第0列與第0行零開始數避免走出圖格外
     }
     while(! step.isEnd()){
        //up
        if(MAZE[step.row-1][step.col] == 0)//向上走（向上下row-1或row+1)
        {
            step = new Point(step.row-1, step.col);
            MAZE[step.row][step.col]=2;
            Stack.push(step);
            rollback=false;
        }else if(MAZE[step.row+1][step.col] == 0){ //向下走
         
            step = new Point(step.row+1,step.col);
            MAZE[step.row][step.col]=2;
            Stack.push(step);
            rollback=false;
        }else if(MAZE[step.row][step.col-1] == 0){//左（向左右col-1或col+1)

            step=new Point(step.row,step.col-1);
            MAZE[step.row][step.col]=2
            Stack.push(step);
            rollback=false;

        }else if(MAZE[step.row][step.col+1]){//右
        
            step=new Point(step.row,step.col+1)
            MAZE[step.row][step.col]=2
            Stack.push(step);
            rollback=false;
        }else{
            if(Stack.length>0){//返回換取路綫
              step = Stack.pop();
              rollback=true
        }else
          break;
            
              
     }
     if(Stack.length>0)
        console.log("Done!");
     else {
        console.log("No solution!");
     }
}