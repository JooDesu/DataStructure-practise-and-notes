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
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]//起點：[1,1],終點:[16,10]

class Point{
    constructor(_row,_col){//用來定義與判斷開頭與結尾處於格子位置
        this.row = _row;
        this.col=_col
    }
    isEnd=function(){//用來回傳終點處於位置
        return this.row==checkpoint.row && this.col==checkpoint.col
    }
}
var begin = new Point(1,1)//開頭
var checkpoint= new Point(16,10)//結尾
var stack = []
var step = begin
var rollback=false//用來確保是否在路徑上已通過、走過的路線
var direction = [//宣告走的格數與方向、如果想要格數走的數量增加可以放+2，-2等放在row或columme
    [-1,0],//向上
    [1,0],//向下
    [0,-1],//向左
    [0,1],//向右
]
function avoidwalls(_row,_col){
    return _row >= 0 && _row < MAZE.length && _col >= 0 && _col < MAZE[0].length && MAZE[_row][_col] === 0;//確保在地圖內部行走
}
function go(){
    stack.push(step);
    MAZE[step.row][step.col]=2;//避免重複走回已經過的道路
}
while (!step.isEnd()){//檢查是否已達到終點

    direction.sort((Math.random()-0.5));//隨機走動不同道路到終點（使用-0.5確保隨機移動幾率較高而並非傾斜走動相同的道路）
    
    let emptyspace= false;//用來嘗試每個方向是否可以移動
    
    for (let dir of direction) {
        let newrow = step.row + dir[0]; // 上下移动的改变【0】代表上下方向
        let newcol = step.col + dir[1]; // 左右移动改变【1】代表左右方向   
    
if  (avoidwalls (newrow,newcol)){//確保新的一格是否可以行走
    step=new Point(newrow,newcol);
    go();
    emptyspace=true;
    break;
}
}if(stack.length>0){
    step=stack.pop();//返回到最近剛移動到的點
    rollback=true;
}else{
    break;
}
if (step.isEnd())//判斷是否有走完
    console.log("Maze Complete")
else
    console.log("Error In Maze")
}

