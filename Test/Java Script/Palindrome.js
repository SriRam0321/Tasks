    // 4. Check given number is palindrome or not
  
     let number = parseInt(prompt("enter a number"));
  // var number = 121;
    var number1 = number;
        var sum = 0;
 
  var palindrome = (number)=>{
    while(number!=0){
       let rem = number%10
        number = (number-rem)/10
           sum = (sum*10)+rem
     }

     if(sum===number1){
        console.log(sum+" Its a Palindrome")
     }

     else{
        console.log(sum+" Its Not a Palindrome")
     }
              
         }
    console.log(palindrome(number))