var readline = require("readline-sync")
var Ans = Math.floor(Math.random()*9)+20
var win = false;

while(!win){
    do{
        var Q = readline.questionInt("Please Input an integer from the range of 20 to 29")
    }while(Q<20 || Q>29)
        if(Ans == Q){
            console.log("Congratulation,you are lucky winner!!!")
        var again = readline.question ("Do you wanna give a shot again?Yes/No")
        if(again == "Yes"){
            Ans = Math.floor(Math.random()*9)+20
        }else{
            win=true
        }
    }else {
        console.log("Wrong,try again");
    }if(again == "No"){
        console.log("We will see you next time.T.T")
    }
}