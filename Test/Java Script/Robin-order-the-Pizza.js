// 10 ."Robin, a  small boy from Wonderland, loves to eat pizza. One morning he picks up his mother's phone and orders pizza using the PizzaHub app. Robin selects his favorite cheese barbeque pizza and press the order button.

// The PizzaHub app registers the order and informs Robin that it will notify him when the pizza is ready and on the way. Robin, the happy boy, waits for a while and finally gets a notification confirming that the pizza is on its way!                So, if we break down the story, the sequence of events goes like this:

// Robin orders the pizza
// The app notes down the order
// PizzaHub prepares the pizza, and it is ready after a while.
// The app notifies Robin, confirming the pizza is on the way.
// The mechanism of notifying Robin about the pizza works by using the callback function."

              let price = 5000;
			   let food = "Dominos Chicken Pizza"

				function PizzaHub(callback) {

			  setTimeout(() => {
			    callback(`Your Pizza is Ready on the Way`);
			  }, 5000);
			}

			console.log(`Robins Order the ${food}`);

			setTimeout(function(){

			console.log("PizzaHub prepares the pizza");

			},2000)

			setTimeout(function(){

			console.log(`Your Pizza Prize is RS ${price} and Your Pizza is ${food}`);

			},3000)

			setTimeout(function(){

			console.log("The app notes down the order");

			},1000)

			setTimeout(function(){

			console.log(`Your Pizza Is Deliverd Successfully`);

			},6000)

			PizzaHub((message) => {
			  console.log(message);
			});
