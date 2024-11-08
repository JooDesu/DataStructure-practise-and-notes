const Live = 1;//宣告存活的值
const Dead = 0;//宣告死亡的值

class Life{
   constructor(_row, _col){
        this.row = _row;//宣告行
        this.col = _col;//宣告排
        this.grid=[];//new Array()新的陣列，並且是2d陣列
        //2d array
        for(var _row=0;_row < this.row;_row++){
            this.grid.push([]);//把上面的值（_row,_col)的值加入陣列裡
            for(var _col=0;_col < this.col;_col++){
                this.grid[_row].push(Dead);//將上面(const dead=0)的值加入陣列[_row]裡
            }
        }
        
    }
    initialize = function(random){
        if(random == true){
            for(var _row=0;_row < this.row;_row++){
                for(var _col=0;_col < this.col;_col++){
                    this.grid[_row][_col] = (Math.random()<0.1) ? Live : Dead;//隨機運算
                }
            }
        }else{
            this.grid[1][1] = Live;//當[是第二行的第二排]的值小過0.1
            this.grid[1][2] = this.grid[1][3] = this.grid[1][4] =Live; 
        }
    }

    update = function(){
          var nextGrid = JSON.parse(JSON.stringify(this.grid));//將字串變成陣列
          //travse all elements, count its neighbor
          var neighbor;
          for (let _row = 0; _row < this.row; _row++) {
            for (let _col = 0; _col < this.row; _col++) {
                neighbor = this.neighborCount(_row, _col);//判斷該細胞周圍的的值並判斷是否遵守以下的規矩
                // update by 4 rules
                if(this.getStatusAt(_row,_col)==Live && (neighbor<=1 || neighbor>=4)){//當細胞活著時和周圍被佔的格子少過或等於零或者大過四或等於4
                    nextGrid[_row][_col] = Dead;//細胞死亡
                }
                if(this.getStatusAt(_row,_col)==Dead && neighbor==3){//當細胞是死事和周圍被佔的格子是3的話
                    nextGrid[_row][_col] = Live;//細胞存活
                }

            }
            
          }

          this.grid = null;
          this.grid = nextGrid;
    } 


    neighborCount = function(row, col){//判斷用途細胞的位置
        var count=0;
        count += this.getStatusAt(row-1, col-1);
        count += this.getStatusAt(row-1, col); 
        count += this.getStatusAt(row-1, col+1); 
        
        count += this.getStatusAt(row, col-1);

        count += this.getStatusAt(row, col+1); 
        
        count += this.getStatusAt(row+1, col-1); 
        count += this.getStatusAt(row+1, col); 
        count += this.getStatusAt(row+1, col+1);      
        return count;   
    }
    getStatusAt = function(row, col){//判斷細胞周圍被佔的值，判斷該細胞死亡或存活
        if(row<0 || col<0 || row >= this.row || col >= this.col){
           return Dead;
        }else{
            return this.grid[row][col];
        }
    }

    draw = function(_canvas){//畫在格子上面
        var canvas = document.getElementById(_canvas).getContext("2d");
        this.size=Math.min(canvas.canvas.height/this.row, canvas.canvas.width/this.col);
        for(var _row=0;_row<this.row;_row++){
            for(var _col=0;_col<this.col;_col++){
                //ar2d[_row][_col]=>0,1
                if(this.grid[_row][_col]==Live){
                    canvas.fillStyle="#ff0000"//輸入顏色
                }else{
                    canvas.fillStyle="#ffffff"//輸入顏色
                }
                //600/5=>120  coordinate x,y , width, heigth
                canvas.fillRect(_col*this.size,_row*this.size,this.size,this.size);
                canvas.strokeRect(_col*this.size,_row*this.size,this.size,this.size);
            }
        }
    }
    drawPoint = function(_canvas,_row,_col){
        var canvas = document.getElementById(_canvas).getContext("2d");
        //this.size=Math.min(canvas.canvas.height/this.row, canvas.canvas.width/this.col);
        if(this.grid[_row][_col]==Live){
            canvas.fillStyle="#ff0000"
        }else{
            canvas.fillStyle="#ffffff"
        }
        canvas.fillRect(_col*this.size,_row*this.size,this.size,this.size);
        canvas.strokeRect(_col*this.size,_row*this.size,this.size,this.size);
    }
}



// Life.prototype.update= function(){

// }

function tonext(){
    myGame.update();
    myGame.draw("map")
}

function mouseClick(event){//讓玩家可以用滑鼠點擊格子，產生細胞
   var _row = Math.floor(event.offsetY/myGame.size);
   var _col = Math.floor(event.offsetX/myGame.size);
//    if(myGame.getStatusAt(_row,_col)==Live){
//     myGame.grid[_row][_col]=Dead;
//    }else{
//     myGame.grid[_row][_col]=Live;
//    }

   //myGame.grid[_row][_col] = (myGame.getStatusAt(_row,_col)==Live) ? Dead : Live;

   myGame.grid[_row][_col] = Number(!myGame.getStatusAt(_row,_col)); 


   //    if() else ...
//    ()? :
   myGame.drawPoint("map",_row,_col);
}

function random(){
   myGame.initialize(true);//隨機生成
   myGame.draw("map");
}

var myTime;
function run(){
   var step = document.getElementById("step").value;
   myTime = setInterval(tonext, Number(step));//每隔一個時間，到下一步的畫面
}
function stop(){
    clearInterval(myTime);//停止所有運算
}


var myGame = new Life(100,100);
var myGame2 = new Life(100,100);

myGame.initialize();
myGame.draw("map")//格子出現（以設定該格子的數量與大小在game of life.html

var runnng = setTimeout(tonext, 1000);