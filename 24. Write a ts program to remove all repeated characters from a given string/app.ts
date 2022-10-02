//24. Write a ts program to remove all repeated characters from a given string.


function unique(a) {
    var result = "";
    for(var i = 0; i < a.length; i++) {
      if(result.indexOf(a[i]) < 0) {
        result = result + a[i];
      }
    }
    return result;
  }
  
  console.log(
    unique('ajmal'),
    
  );
  