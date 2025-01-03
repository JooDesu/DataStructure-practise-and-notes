Array.prototype.heapSort=function(){
    //construction
     for(let internal= parseInt(this.length/2)-1; internal>=0; internal--){//從哪一個點開始比較大小
         this.shiftDown(internal, this.length-1);
     }
    //sort
     for(let end=this.length-1; end>0; end--){
        //root <-> end
        var temp = this[0];
        this[0] = this[end];
        this[end] = temp;
        this.shiftDown(0, end-1);
     }
  }
  Array.prototype.shiftDown=function(internal, end){
      while(internal*2+1<=end){ //has child
           var left=internal*2+1;
           var right=internal*2+2;
           var maxChild = left;
           if(right<=end && this[right]>this[left]){
              maxChild = right;
           }
           if(this[internal]<this[maxChild]){//更換位置（大小比較后小的更大的交換位置）
              //swap
              var temp=this[internal];
              this[internal] = this[maxChild];
              this[maxChild] = temp;
              internal = maxChild;
           }else{
              return;
           }
      }
  }
  
  var ary=[1,2,3,17,19,36,7,25,100];
  ary.heapSort();