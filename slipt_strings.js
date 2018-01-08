function solution(str){
    var arr = [];
    var newStr = "";
     if(str.length % 2 !== 0){
       str = str + "_";
     }
    while(str.length > 1){
      newStr = str.slice(0, 2);
      str = str.slice(2);
      arr.push(newStr);
    }
    return arr;
 }