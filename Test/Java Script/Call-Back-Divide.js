// 12. "Program for divde two numbers using callback function Create one function name  ""operation"" in this function first two parameter is value  the third parameter is a callback function. create another function named Divide pass this function (callback"")as an argument and then calling it inside the parent function 
// i.e., operation. Here, we have taken the ""divide"" as the callback function, we can create any function and pass it as the callback in the operation function."


          let num1 = 10;
          let num2 = 20;
    
     function operation(a,b,find){
         return find(a,b)
     }

      function check(a,b){
      	return a/b
      }

   console.log(operation(num1,num2,check))