function describeList(x) {
    if(x.length == 0){
    return "empty";
    }
    else if (x.length == 1){
    return "singleton";
    }
    else{
    return "longer";
    }
  }