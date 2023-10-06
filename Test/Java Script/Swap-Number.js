// "2. Write a program in JS to swap two numbers using a function. 
// Test Data : 
// Input 1st number : 2 
// Input 2nd number : 4 
// Expected Output : 

// Before swapping: n1 = 2, n2 = 4                                                   
// After swapping: n1 = 4, n2 = 2 "

	   let swap = (num1,num2)=>{
	 let temp = num1   
	     num1 = num2;
	     num2 = temp;
	    console.log(num1,num2)
	  }

	  console.log(swap(4,1))