// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number.
 // The program displays a message ""Good Work"" if the input matches the guess number otherwise ""Not matched""."

                           let a = 5;

                    let check = function(){
                        let random = Math.floor(Math.random()*10+1);
                      
                      if(random===a){
                        clearInterval(C)
                        console.log(random+" Good Work")
                      }

                      else{
                        console.log(random+" Not Matched")
                      }

                    }

                    let C = setInterval(check,1000);

                    console.log(C)
       