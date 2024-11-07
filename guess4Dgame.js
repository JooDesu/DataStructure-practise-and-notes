var readline = require("readline-sync");

var Ans=[0,1,2,3,4,5,6,7,8,9]; //寫下一個排列組合
for(var i=0;i<4;i++){//是將會從以上排列的組合前面的4個數目進行弄亂排列
  var rand = Math.floor(Math.random()*10);//用在隨機產生數字,floor將會寫出整數不會有小數點。
  var temp= Ans[i];
  Ans[i] = Ans[rand];
  Ans[rand] = temp;
}
Ans = Ans.slice(0,4);//用於只拿前面的數字（應外這個用在(Ans.includes(parseInt(Gstr[i])))確保只會有4個數字否則會超過到10個字）
var gCount=10;//用來限制玩家可以回答或猜題的次數
do{
  do{
    var G=readline.questionInt("Please input 4 digits? ");
  }while(String(G).length!=4)//用來限制玩家只能寫4個數字
  //}while(G<1000 || G>=10000);//第二種寫法來限製4個數字
  var Gstr = G.toString();//換成字串變成陣列迴圈
  var countA=0,countB=0;
  for(var i=0;i<4;i++){//第一種寫法
      if(Ans[i] == Gstr[i])//當數字與位置相同時A++
        countA++;
      else if(Ans.includes(parseInt(Gstr[i]))){//相反如果擁有數字但沒有相同位置B++
        countB++;
      }
      
      // for(var i=0;i<4;i++)//第二種寫法
      //for(var j=0;j<4;j++){//Gstr[0]!Gstr[3]
      //     if(Ans[i]==Gstr[j]){
      //       if(i==j)
      //         countA++;
      //       else 
      //         countB++;
      //     }
      // }

      // if(Ans[i] == Gstr[i])//第三種寫法
      //   countA++;
      // else if(Gstr.indexOf(Ans[i]>=0)){
      //   countB++;
      // }
  }
  gCount--;
  console.log("Result: "+countA+"A"+countB+"B");
  //"${CountA}A${countB}B"第二種寫法
  if(countA==4){
    console.log("You win!");
  }
}while(countA<4 && gCount>0)

if(countA<4)
  console.log("You lose!");