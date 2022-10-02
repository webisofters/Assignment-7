//20. Write a ts program to count frequency of each character in a string.


var a = 'This is class room';

   var count = {}
   for(let i = 0; i < a.length; i++){
      count[a[i]] = (count[a[i]] || 0) + 1;
   };

;
console.log(count);
