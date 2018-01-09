function elimination(arr){
    //write your code here 
    
    var count = 0;
    var currentCount = 0;
    var num = 0;
    
    for(var i = 0; i<arr.length; i++){
      for(var j =0; j<arr.length; j++){
        if(arr[i] == arr[j]){
          currentCount++;
          
        }
      }
      if(currentCount > count){
        count = currentCount;
        num = arr[i];
      }
      currentCount = 0;
    }
    if(count <= 1){
      return null;
    }
    return num;
    }