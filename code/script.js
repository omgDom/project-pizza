// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const userName = prompt(`What's your name?`)

alert(`Hey ${userName}, nice to meet you!`)

// Step 2 - Food choice
// Your code goes here
const foodChoice = prompt(
  `Select the type of food you would like to order:
  1 - Pizza
  2 - Pasta
  3 - Salad
  Please enter the number of your choice`
  );

  let selectedChoice;

  if (foodChoice === "1") {
    selectedChoice = "Pizza";
  } else if (foodChoice === "2") {
    selectedChoice = "Pasta";
  } else if (foodChoice === "3") {
    selectedChoice = "Salad";
  } else {
    alert ("Invalid choice, please start again and select an option. Bye 👋");
    exit(1);
  }

  alert(`You've chosen ${selectedChoice}!`)

  // Step 3 - Subtype choice
  // Your code goes here
  let subtype = "";
  let foodTypes = [];
switch (selectedChoice) {
  case "Pizza":
    subtype = prompt(
      `Select the type of Pizza
      1 - Margherita Pizza
      2 - Meat Feast Pizza
      3 - Hawaiian Pizza
      Please enter the number of your choice`
    );
    foodTypes = ["Margherita Pizza", "Meat Feast Pizza", "Hawaiian Pizza"];
    break;
    
   case "Pasta":
     subtype = prompt(
      `Select the type of Pasta
       1 - Pasta Carbonara
       2 - Spaghetti Bolognaise
       3 - Ravioli
       Please enter the number of your choice`
     );
      foodTypes = ["Pasta Carbonara", "Spaghetti Bolognaise", "Ravioli"];
    break;
       
    case "Salad":
      subtype = prompt(
        `Select the type of Salad
        1 - Caesar Salad
        2 - Russian Salad
        3 - Chef Salad
        Please enter the number of your choice`
      );
      foodTypes = ["Caesar Salad", "Russian Salad", "Chef Salad"];
      break;

    default:
      alert ("Invalid choice, please start again and select an option. Bye 👋");
      exit(1);
}

switch (subtype) {
  case "1":
    alert(`You've chosen ${foodTypes[0]}!`);
    break;
  case "2":
    alert(`You've chosen ${foodTypes[1]}!`);
    break;
  case "3":
    alert(`You've chosen ${foodTypes[2]}!`);
    break;
  default:
    alert ("Invalid choice, please start again and select an option. Bye 👋");
    exit(1);
}

// Step 4 - Age
// Your code goes here
const portionSize = prompt(`Which portion size would you like to order?
1 - Large portion $20
2 - Small portion $12
Please enter the number of your choice`
);

let portionPrice;

if (portionSize === "1")  {
  portionPrice = "large portion - $20"
} else if (portionSize === "2") {
  portionPrice = "small portion - $12"
} else {
  alert (`Invalid choice, please start again and select an option. Bye 👋`);
  exit(1);
}

alert(`You've chosen the ${portionPrice}.`)
// Step 5 - Order confirmation
// Your code goes here

let finalBill = prompt(`Just to confirm you've chosen the ${foodTypes[Number(subtype) - 1]} in a ${portionPrice}!

If this is correct please press 1, to continue to payment. 

If not press 2 to start again.`);

let lastBill;

switch (finalBill) {
  case "1":
    alert(`Great ${userName}, your order has been accepted and will be with you shortly.
    Thanks`);
    break;
  case "2":
    alert(`We hope to see you back soon! 👋`);
    window.location.reload();
    break;

  default:
    alert ("Invalid choice, please start again and select an option. Bye 👋");
    exit(1);
};
