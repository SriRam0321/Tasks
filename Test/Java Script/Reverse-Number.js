   // 5. Print reverse number

	     let reverseNumber = (num) => {
	       let reversedNum = 0;

			  while (num !== 0) {
			    reversedNum = reversedNum * 10 + num % 10;
			    num = Math.floor(num / 10);
			    console.log(num)
			  }
			  return reversedNum;
			};

			console.log(reverseNumber(3322))