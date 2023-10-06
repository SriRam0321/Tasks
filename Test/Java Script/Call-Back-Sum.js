// 13. "Program for sum two numbers using callback function Create one function name  ""operation"" in this function first two parameter is value  the third parameter is a callback function. create another function named Sum pass this function (callback"")as an argument and then calling it inside the parent function 
// i.e., operation. Here, we have taken the ""sum"" as the callback function, we can create any function and pass it as the callback in the operation function."

		    
		    let a = 10;
		    let b = 20;

		    function check(num1,num2,calc){
		      return calc(num1,num2)
		    }
		    
		    function find(num1,num2){
		    	return a+b
		    }

		console.log(check(a,b,find))
 
