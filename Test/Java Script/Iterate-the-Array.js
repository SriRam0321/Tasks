// 11. Iterate the below array using callback function  var numbers = [1, 2, 3, 4, 5];(forEach)

       let numbers=[1,2,3,4,5]

        function check(a,find){
        	return find(a) 
        }

        function iterate(a){
        	a.forEach(e=>{
        		console.log(e)
        	})
        }


        console.log(check(numbers,iterate))